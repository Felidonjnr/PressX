import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { db, auth } from "../lib/firebase";
import { collection, query, orderBy, onSnapshot, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth";
import { Loader2, Shield, LogOut, Check, X, Trash2, Mail, MessageSquare } from "lucide-react";

interface AccessRequest {
  id: string;
  name: string;
  email: string;
  telegram?: string;
  supportType: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState<AccessRequest[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      // Check if admin (hardcoded for now as per rules)
      if (u?.email === "godshandudoh@gmail.com") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isAdmin) return;

    const q = query(collection(db, "access_requests"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as AccessRequest[];
      setRequests(data);
    }, (error) => {
      console.error("Firestore error:", error);
    });

    return () => unsubscribe();
  }, [isAdmin]);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = () => auth.signOut();

  const updateStatus = async (id: string, status: 'approved' | 'rejected') => {
    try {
      await updateDoc(doc(db, "access_requests", id), { status });
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const deleteRequest = async (id: string) => {
    if (!confirm("Are you sure you want to delete this request?")) return;
    try {
      await deleteDoc(doc(db, "access_requests", id));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="animate-spin text-accent" size={48} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="glass p-12 rounded-2xl text-center max-w-md w-full">
          <Shield className="mx-auto text-accent mb-6" size={64} />
          <h1 className="text-3xl font-display font-bold mb-4">Admin Access</h1>
          <p className="text-white/60 mb-8">Please sign in with an authorized account to manage access requests.</p>
          <button
            onClick={handleLogin}
            className="w-full bg-accent text-background font-bold py-4 rounded-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="glass p-12 rounded-2xl text-center max-w-md w-full">
          <X className="mx-auto text-red-500 mb-6" size={64} />
          <h1 className="text-3xl font-display font-bold mb-4">Access Denied</h1>
          <p className="text-white/60 mb-8">Your account ({user.email}) is not authorized to access this dashboard.</p>
          <button
            onClick={handleLogout}
            className="text-accent hover:underline font-mono text-sm uppercase tracking-widest"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-display font-bold mb-2">Access Requests</h1>
            <p className="text-white/40 font-mono text-sm uppercase tracking-widest">
              {requests.length} total requests received
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-all text-sm"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>

        <div className="grid gap-6">
          {requests.map((req) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-6 rounded-xl border-l-4 border-l-accent flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold">{req.name}</h3>
                  <span className={`text-[10px] uppercase tracking-tighter px-2 py-0.5 rounded-full font-bold ${
                    req.status === 'approved' ? 'bg-green-500/20 text-green-500' :
                    req.status === 'rejected' ? 'bg-red-500/20 text-red-500' :
                    'bg-accent/20 text-accent'
                  }`}>
                    {req.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-white/60">
                  <div className="flex items-center gap-1.5">
                    <Mail size={14} className="text-white/30" />
                    {req.email}
                  </div>
                  {req.telegram && (
                    <div className="flex items-center gap-1.5">
                      <MessageSquare size={14} className="text-white/30" />
                      {req.telegram}
                    </div>
                  )}
                  <div className="text-white/30 font-mono text-xs">
                    {new Date(req.createdAt).toLocaleString()}
                  </div>
                </div>
                <div className="text-xs font-mono text-accent/60 uppercase tracking-widest">
                  Support: {req.supportType}
                </div>
              </div>

              <div className="flex items-center gap-3">
                {req.status === 'pending' && (
                  <>
                    <button
                      onClick={() => updateStatus(req.id, 'approved')}
                      className="p-3 bg-green-500/10 text-green-500 rounded-lg hover:bg-green-500/20 transition-all"
                      title="Approve"
                    >
                      <Check size={20} />
                    </button>
                    <button
                      onClick={() => updateStatus(req.id, 'rejected')}
                      className="p-3 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-all"
                      title="Reject"
                    >
                      <X size={20} />
                    </button>
                  </>
                )}
                <button
                  onClick={() => deleteRequest(req.id)}
                  className="p-3 bg-white/5 text-white/40 rounded-lg hover:bg-red-500/20 hover:text-red-500 transition-all"
                  title="Delete"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </motion.div>
          ))}
          
          {requests.length === 0 && (
            <div className="text-center py-24 glass rounded-2xl">
              <p className="text-white/40 italic">No requests found in the system.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
