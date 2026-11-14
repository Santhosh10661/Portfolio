import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Truck,
  Shield,
  Smartphone,
  Calendar,
  Heart,
  MessageCircle,
  Share2,
  CheckCircle2,
  Package,
  Layers,
  ShoppingBag,
  TrendingUp,
  Activity,
  Users,
  Clock,
  ArrowRight
} from 'lucide-react';

export function ProjectMockup({ slug }) {
  if (slug === 'venba') {
    return <VenbaMockup />;
  }
  if (slug === 'collabon') {
    return <CollabonMockup />;
  }
  if (slug === 'emagrigoat') {
    return <EmagriGoatMockup />;
  }
  return <DefaultSystemMockup slug={slug} />;
}

/* =========================================================================
   1. VENBA LOGISTICS INTERACTIVE MOCKUP (3 Admin Panels + Mobile App)
   ========================================================================= */
function VenbaMockup() {
  const [activeTab, setActiveTab] = useState('super-admin');

  return (
    <div className="w-full rounded-2xl bg-[#0c1015] border border-border/80 overflow-hidden shadow-2xl flex flex-col font-sans select-none">
      {/* Chrome Window Header */}
      <div className="px-4 py-3 bg-[#131922] border-b border-border/70 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-3 text-[11px] font-mono text-text-secondary/80">
            venba-logistics-os.internal
          </span>
        </div>

        {/* Role Switcher Tabs */}
        <div className="flex items-center bg-[#0c1015] p-1 rounded-lg border border-border/60">
          {[
            { id: 'super-admin', label: 'Super Admin', icon: Shield },
            { id: 'consignor', label: 'Consignor', icon: Package },
            { id: 'transporter', label: 'Transporter App', icon: Smartphone },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.id);
                }}
                className={`relative px-2.5 py-1 text-[11px] font-mono rounded-md flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'text-accent font-semibold bg-accent/15 border border-accent/30'
                    : 'text-text-secondary hover:text-foreground'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Screen Content */}
      <div className="p-4 sm:p-5 min-h-[260px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {activeTab === 'super-admin' && (
            <motion.div
              key="super-admin"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-border/50">
                <div>
                  <h4 className="text-xs font-mono uppercase text-accent font-bold tracking-wider">
                    Super Admin Console
                  </h4>
                  <p className="text-[11px] text-text-secondary">Global Fleet Governance & Pricing Tiers</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-mono text-[10px] border border-emerald-500/30">
                  Live: 142 Active Fleets
                </span>
              </div>

              {/* KPI Metrics */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 rounded-xl bg-bg-secondary border border-border/70">
                  <span className="text-[10px] font-mono text-text-secondary block">Today Dispatches</span>
                  <span className="text-lg font-bold text-foreground font-mono">1,248</span>
                  <span className="text-[10px] text-emerald-400 font-mono block mt-0.5">↑ 14% vs avg</span>
                </div>
                <div className="p-2.5 rounded-xl bg-bg-secondary border border-border/70">
                  <span className="text-[10px] font-mono text-text-secondary block">On-Time Deliveries</span>
                  <span className="text-lg font-bold text-accent font-mono">99.4%</span>
                  <span className="text-[10px] text-accent/80 font-mono block mt-0.5">SLA Target met</span>
                </div>
                <div className="p-2.5 rounded-xl bg-bg-secondary border border-border/70">
                  <span className="text-[10px] font-mono text-text-secondary block">Active Companies</span>
                  <span className="text-lg font-bold text-foreground font-mono">384</span>
                  <span className="text-[10px] text-text-secondary font-mono block mt-0.5">Enterprise tier</span>
                </div>
              </div>

              {/* Data Table Preview */}
              <div className="rounded-xl border border-border/60 bg-bg-secondary/60 p-2.5 text-[11px] font-mono">
                <div className="flex items-center justify-between text-text-secondary pb-1.5 border-b border-border/40">
                  <span>MANIFEST ID</span>
                  <span>ROUTE</span>
                  <span>TRANSPORTER</span>
                  <span>STATUS</span>
                </div>
                <div className="flex items-center justify-between py-1.5 text-foreground">
                  <span className="text-accent">#VNB-8921</span>
                  <span>Chennai → Bangalore</span>
                  <span className="text-text-secondary">SwiftExpress</span>
                  <span className="text-emerald-400">In Transit (GPS live)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 text-foreground border-t border-border/30">
                  <span className="text-accent">#VNB-8922</span>
                  <span>Coimbatore → Kochi</span>
                  <span className="text-text-secondary">Apex Logistics</span>
                  <span className="text-amber-400">Dispatch Ready</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'consignor' && (
            <motion.div
              key="consignor"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-border/50">
                <div>
                  <h4 className="text-xs font-mono uppercase text-accent font-bold tracking-wider">
                    Consignor & Consignee Portal
                  </h4>
                  <p className="text-[11px] text-text-secondary">Freight Booking, Manifest Generation & Live Tracking</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-accent/15 text-accent font-mono text-[10px] border border-accent/30">
                  Automated Waybill
                </span>
              </div>

              <div className="p-3 rounded-xl bg-bg-secondary border border-border flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-text-secondary">Create Shipment Order</span>
                  <p className="text-xs font-semibold text-foreground">Bulk Textile Freight (12 Metric Tons)</p>
                  <p className="text-[11px] text-text-secondary font-mono">Consignee: Darasuram Warehouse Hub</p>
                </div>
                <span className="px-3 py-1.5 rounded-lg bg-accent text-background font-mono text-xs font-bold">
                  Assigned: 3 Bids
                </span>
              </div>

              {/* Timeline checkpoints */}
              <div className="grid grid-cols-4 gap-1 text-center font-mono text-[10px]">
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/30 text-accent">
                  ✓ Order Placed
                </div>
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/30 text-accent">
                  ✓ Transporter Bound
                </div>
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  ● En Route (45km left)
                </div>
                <div className="p-2 rounded-lg bg-bg-secondary border border-border text-text-secondary">
                  ○ Delivery Sign-off
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'transporter' && (
            <motion.div
              key="transporter"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-border/50">
                <div>
                  <h4 className="text-xs font-mono uppercase text-accent font-bold tracking-wider">
                    React Native Bare Workflow Mobile App
                  </h4>
                  <p className="text-[11px] text-text-secondary">Driver Dispatch UI, Route Optimization & QR Proof</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-accent/15 text-accent font-mono text-[10px]">
                  Bare CLI + Offline Cache
                </span>
              </div>

              {/* Mobile Card Preview */}
              <div className="max-w-md mx-auto rounded-xl bg-gradient-to-br from-bg-secondary to-[#18202c] border border-border/80 p-3.5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Trip in Progress
                  </span>
                  <span className="text-xs font-mono text-foreground font-bold">Vehicle: TN-49-AJ-1066</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono py-1 border-y border-border/40">
                  <span className="text-text-secondary">Pickup: Ennore Port</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent" />
                  <span className="text-text-secondary">Drop: Coimbatore DC</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-bold text-accent font-mono">Freight Payout: ₹38,500</span>
                  <button className="px-3 py-1 rounded bg-accent text-background font-mono text-[11px] font-bold">
                    Scan QR Delivery
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Tech Spec */}
        <div className="pt-3 border-t border-border/50 flex flex-wrap items-center justify-between text-[11px] font-mono text-text-secondary">
          <span>Stack: React.js · React Native CLI · Redux Toolkit · Axios · SCSS</span>
          <span className="text-accent">3 Web Panels + 2 Native Apps</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   2. COLLABON ERP INTERACTIVE MOCKUP (Web + Expo Mobile + Social Feed)
   ========================================================================= */
function CollabonMockup() {
  const [activeTab, setActiveTab] = useState('scheduler');
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full rounded-2xl bg-[#0e1117] border border-border/80 overflow-hidden shadow-2xl flex flex-col font-sans select-none">
      {/* Chrome Window Header */}
      <div className="px-4 py-3 bg-[#151a24] border-b border-border/70 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-3 text-[11px] font-mono text-text-secondary/80">
            collabon-erp.campus/portal
          </span>
        </div>

        {/* Module Switcher */}
        <div className="flex items-center bg-[#0e1117] p-1 rounded-lg border border-border/60">
          {[
            { id: 'scheduler', label: 'Period Timetable', icon: Calendar },
            { id: 'mobile-app', label: 'Faculty App', icon: Smartphone },
            { id: 'social-feed', label: 'Campus Social Feed', icon: Heart },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.id);
                }}
                className={`relative px-2.5 py-1 text-[11px] font-mono rounded-md flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'text-accent font-semibold bg-accent/15 border border-accent/30'
                    : 'text-text-secondary hover:text-foreground'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Screen Content */}
      <div className="p-4 sm:p-5 min-h-[260px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {activeTab === 'scheduler' && (
            <motion.div
              key="scheduler"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-border/50">
                <div>
                  <h4 className="text-xs font-mono uppercase text-accent font-bold tracking-wider">
                    Dynamic Period Scheduling & Attendance Engine
                  </h4>
                  <p className="text-[11px] text-text-secondary">Curriculum Unit Real-Time Progress Matrix</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-accent/15 text-accent font-mono text-[10px]">
                  Department: Computer Science (MCA)
                </span>
              </div>

              {/* Grid Timetable Representation */}
              <div className="grid grid-cols-4 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-bg-secondary border border-border/80">
                  <span className="text-[10px] text-accent block">Period 1 (09:00 - 10:00)</span>
                  <span className="font-bold text-foreground block mt-1">Advanced React & Hooks</span>
                  <span className="text-[10px] text-emerald-400 block mt-1">✓ Attendance: 44/45</span>
                </div>
                <div className="p-2.5 rounded-xl bg-bg-secondary border border-border/80">
                  <span className="text-[10px] text-accent block">Period 2 (10:00 - 11:00)</span>
                  <span className="font-bold text-foreground block mt-1">Distributed Databases</span>
                  <span className="text-[10px] text-emerald-400 block mt-1">✓ Attendance: 42/45</span>
                </div>
                <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/40 shadow-sm">
                  <span className="text-[10px] text-accent font-bold block">Period 3 (11:15 - 12:15)</span>
                  <span className="font-bold text-accent block mt-1">Web Systems Lab</span>
                  <span className="text-[10px] text-accent animate-pulse block mt-1">● In Progress Now</span>
                </div>
                <div className="p-2.5 rounded-xl bg-bg-secondary border border-border/80">
                  <span className="text-[10px] text-text-secondary block">Period 4 (01:15 - 02:15)</span>
                  <span className="font-bold text-text-secondary block mt-1">Cloud Computing</span>
                  <span className="text-[10px] text-text-secondary/70 block mt-1">○ Scheduled</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'mobile-app' && (
            <motion.div
              key="mobile-app"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-border/50">
                <div>
                  <h4 className="text-xs font-mono uppercase text-accent font-bold tracking-wider">
                    React Native (Expo) Companion App
                  </h4>
                  <p className="text-[11px] text-text-secondary">Instant 1-Tap Student & Teacher Attendance Marking</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-mono text-[10px]">
                  Zero Sync Latency
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-bg-secondary border border-border/80 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-foreground">Section A — Semester IV</p>
                  <p className="text-[11px] text-text-secondary font-mono">Course: Mobile App Architecture</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/30">
                    Mark All Present
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-accent text-background font-mono text-xs font-bold">
                    Submit Period
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'social-feed' && (
            <motion.div
              key="social-feed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-border/50">
                <div>
                  <h4 className="text-xs font-mono uppercase text-accent font-bold tracking-wider">
                    Instagram-Style Campus Interactive Feed
                  </h4>
                  <p className="text-[11px] text-text-secondary">Social announcements, assignment deadlines & post interactions</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-pink-500/15 text-pink-400 font-mono text-[10px]">
                  Social Feed Feature
                </span>
              </div>

              {/* Feed Card */}
              <div className="rounded-xl border border-border/80 bg-bg-secondary/70 p-3 max-w-md mx-auto space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                    SK
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block">Prof. Santhosh K</span>
                    <span className="text-[10px] text-text-secondary font-mono">10 mins ago • Curriculum Unit 3</span>
                  </div>
                </div>
                <p className="text-xs text-text-secondary">
                  Congratulations Section A! Unit 3 (React State with Redux Toolkit) submission deadline is updated. Review the sample repo before Monday test.
                </p>
                <div className="flex items-center gap-4 pt-1.5 text-xs text-text-secondary font-mono">
                  <button
                    onClick={() => setLiked(!liked)}
                    className={`flex items-center gap-1 transition-colors ${
                      liked ? 'text-pink-500 font-bold' : 'hover:text-foreground'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-pink-500' : ''}`} />
                    <span>{liked ? '85' : '84'} Likes</span>
                  </button>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>18 Comments</span>
                  </span>
                  <span className="flex items-center gap-1 ml-auto">
                    <Share2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Tech Spec */}
        <div className="pt-3 border-t border-border/50 flex flex-wrap items-center justify-between text-[11px] font-mono text-text-secondary">
          <span>Stack: React.js · React Native (Expo) · Next.js · Redux Toolkit · Tailwind CSS</span>
          <span className="text-accent">Campus Operating System</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. eMAGRIGOAT E-COMMERCE & ADMIN SUITE INTERACTIVE MOCKUP
   ========================================================================= */
function EmagriGoatMockup() {
  const [activeTab, setActiveTab] = useState('storefront');
  const [cartCount, setCartCount] = useState(2);

  return (
    <div className="w-full rounded-2xl bg-[#0c1310] border border-border/80 overflow-hidden shadow-2xl flex flex-col font-sans select-none">
      {/* Chrome Window Header */}
      <div className="px-4 py-3 bg-[#131d18] border-b border-border/70 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-3 text-[11px] font-mono text-text-secondary/80">
            emagrigoat-market.commerce
          </span>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center bg-[#0c1310] p-1 rounded-lg border border-border/60">
          {[
            { id: 'storefront', label: 'Next.js Storefront', icon: ShoppingBag },
            { id: 'admin', label: 'Inventory Admin Panel', icon: Layers },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.id);
                }}
                className={`relative px-2.5 py-1 text-[11px] font-mono rounded-md flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'text-accent font-semibold bg-accent/15 border border-accent/30'
                    : 'text-text-secondary hover:text-foreground'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Screen Content */}
      <div className="p-4 sm:p-5 min-h-[260px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {activeTab === 'storefront' && (
            <motion.div
              key="storefront"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-border/50">
                <div>
                  <h4 className="text-xs font-mono uppercase text-accent font-bold tracking-wider">
                    Customer E-Commerce Experience (Next.js SSR)
                  </h4>
                  <p className="text-[11px] text-text-secondary">Sub-Second Catalog Query, Dynamic Cart &amp; Order Pipeline</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent font-mono text-xs border border-accent/30">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Cart: {cartCount} items</span>
                </div>
              </div>

              {/* Product cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-bg-secondary border border-border/80 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-accent">Breeding Stock Tier</span>
                    <h5 className="text-xs font-bold text-foreground mt-0.5">Purebred Boer Breeding Pair</h5>
                    <p className="text-[11px] text-text-secondary mt-1">Vaccinated, health certified with weight log.</p>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-border/50">
                    <span className="text-xs font-mono font-bold text-foreground">₹48,000</span>
                    <button
                      onClick={() => setCartCount(c => c + 1)}
                      className="px-2.5 py-1 rounded bg-accent text-background font-mono text-[10px] font-bold hover:bg-accent-hover transition-colors"
                    >
                      + Add to Cart
                    </button>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-bg-secondary border border-border/80 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-accent">Nutrition &amp; Feed</span>
                    <h5 className="text-xs font-bold text-foreground mt-0.5">High-Protein Fodder Concentrate</h5>
                    <p className="text-[11px] text-text-secondary mt-1">Fortified mineral blend (50kg bag).</p>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-border/50">
                    <span className="text-xs font-mono font-bold text-foreground">₹2,400</span>
                    <button
                      onClick={() => setCartCount(c => c + 1)}
                      className="px-2.5 py-1 rounded bg-accent text-background font-mono text-[10px] font-bold hover:bg-accent-hover transition-colors"
                    >
                      + Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'admin' && (
            <motion.div
              key="admin"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-border/50">
                <div>
                  <h4 className="text-xs font-mono uppercase text-accent font-bold tracking-wider">
                    Backoffice Warehouse &amp; Stock Governance
                  </h4>
                  <p className="text-[11px] text-text-secondary">Dynamic Pricing Engine, Coupon Matrix &amp; Dispatch Allocation</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-mono text-[10px]">
                  Real-Time Stock Sync
                </span>
              </div>

              {/* Admin metrics */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 rounded-xl bg-bg-secondary border border-border/70">
                  <span className="text-[10px] font-mono text-text-secondary block">SKUs Tracked</span>
                  <span className="text-base font-bold text-foreground font-mono">248</span>
                  <span className="text-[10px] text-emerald-400 font-mono block">Zero stockouts</span>
                </div>
                <div className="p-2.5 rounded-xl bg-bg-secondary border border-border/70">
                  <span className="text-[10px] font-mono text-text-secondary block">Pending Orders</span>
                  <span className="text-base font-bold text-accent font-mono">18 Orders</span>
                  <span className="text-[10px] text-accent font-mono block">Ready for pickup</span>
                </div>
                <div className="p-2.5 rounded-xl bg-bg-secondary border border-border/70">
                  <span className="text-[10px] font-mono text-text-secondary block">Active Coupons</span>
                  <span className="text-base font-bold text-foreground font-mono">4 Promos</span>
                  <span className="text-[10px] text-text-secondary font-mono block">AGRIFARM15 active</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Tech Spec */}
        <div className="pt-3 border-t border-border/50 flex flex-wrap items-center justify-between text-[11px] font-mono text-text-secondary">
          <span>Stack: Next.js · React.js · Redux Toolkit · Tailwind CSS · REST API</span>
          <span className="text-accent">E-Commerce &amp; Admin Suite</span>
        </div>
      </div>
    </div>
  );
}

function DefaultSystemMockup({ slug }) {
  return (
    <div className="w-full rounded-2xl bg-[#0c1015] border border-border/80 p-6 flex flex-col justify-center items-center text-center">
      <Package className="w-10 h-10 text-accent mb-2" />
      <span className="font-mono text-xs text-foreground font-semibold uppercase">{slug} System Architecture</span>
      <span className="text-[11px] text-text-secondary font-mono mt-1">Enterprise Production Software</span>
    </div>
  );
}
