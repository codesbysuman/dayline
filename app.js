/* ==========================================================================
   MODULE 1: SVG ICON REGISTRY
   ========================================================================== */
const Icons = {
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>`,
  task: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m9 12 2 2 4-4"/></svg>`,
  event: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  routine: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 0 1-4 4H4.2"/></svg>`,
  project: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  goal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  reference: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`
};

/* ==========================================================================
   MODULE 2: WEB AUDIO SYNTHESIZER (Zero-Dependency Chimes)
   ========================================================================== */
const SoundFX = {
  playChime(type = "complete") {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      const ctx = new Ctx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === "complete") {
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.setValueAtTime(880, now + 0.08); // A5
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc.start(now);
        osc.stop(now + 0.28);
      } else if (type === "timer") {
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.14); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.28); // G5
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
        osc.start(now);
        osc.stop(now + 0.65);
      }
    } catch (_) {}
  }
};

/* ==========================================================================
   MODULE 3: DATE & TEMPORAL ENGINE
   ========================================================================== */
const DateUtils = {
  todayISO() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  },
  addDays(isoDate, days) {
    const [y, m, d] = isoDate.split("-").map(Number);
    const dt = new Date(y, m - 1, d + days);
    const ny = dt.getFullYear();
    const nm = String(dt.getMonth() + 1).padStart(2, "0");
    const nd = String(dt.getDate()).padStart(2, "0");
    return `${ny}-${nm}-${nd}`;
  },
  getWeekDays(anchorISO) {
    const [y, m, d] = anchorISO.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    const dayOfWeek = dt.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const mondayISO = this.addDays(anchorISO, mondayOffset);
    const names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return names.map((name, idx) => {
      const iso = this.addDays(mondayISO, idx);
      return { iso, name, dayNum: Number(iso.split("-")[2]) };
    });
  },
  getLastNDays(n = 7) {
    const today = this.todayISO();
    const result = [];
    for (let i = n - 1; i >= 0; i--) {
      const iso = this.addDays(today, -i);
      const [y, m, d] = iso.split("-").map(Number);
      const shortDay = new Date(y, m - 1, d).toLocaleDateString("en-US", { weekday: "narrow" });
      result.push({ iso, shortDay, dayNum: d });
    }
    return result;
  },
  formatReadable(isoDate) {
    if (!isoDate) return "";
    const today = this.todayISO();
    if (isoDate === today) return "Today";
    if (isoDate === this.addDays(today, 1)) return "Tomorrow";
    if (isoDate === this.addDays(today, -1)) return "Yesterday";
    const [y, m, d] = isoDate.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    return dt.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  },
  isRoutineActiveOnDate(routine, isoDate) {
    if (routine.startDate && isoDate < routine.startDate) return false;
    if (routine.endDate && isoDate > routine.endDate) return false;
    const [y, m, d] = isoDate.split("-").map(Number);
    const dayOfWeek = new Date(y, m - 1, d).getDay();
    const freq = routine.frequency || "daily";
    if (freq === "daily") return true;
    if (freq === "weekdays") return dayOfWeek >= 1 && dayOfWeek <= 5;
    if (freq === "weekends") return dayOfWeek === 0 || dayOfWeek === 6;
    if (freq === "weekly") return dayOfWeek === 0;
    return true;
  },
  calculateRoutineStreak(routine) {
    const completed = new Set(routine.completedDates || []);
    let streak = 0;
    let cursor = this.todayISO();
    if (!completed.has(cursor)) {
      cursor = this.addDays(cursor, -1);
    }
    for (let i = 0; i < 365; i++) {
      if (this.isRoutineActiveOnDate(routine, cursor)) {
        if (completed.has(cursor)) {
          streak++;
        } else {
          break;
        }
      }
      cursor = this.addDays(cursor, -1);
    }
    return streak;
  }
};

/* ==========================================================================
   MODULE 4: NATURAL LANGUAGE QUICK CAPTURE PARSER
   ========================================================================== */
const NLPParser = {
  parse(rawInput, selectedType, store, defaultDate) {
    let text = rawInput.trim();
    let type = selectedType;
    let priority = "medium";
    let plannedDate = "";
    let deadline = "";
    let recurrence = "none";
    let projectId = "";
    let matchedProjectTitle = "";
    let url = "";

    const today = DateUtils.todayISO();

    const urlMatch = text.match(/https?:\/\/[^\s]+/i);
    if (urlMatch) {
      url = urlMatch[0];
      text = text.replace(urlMatch[0], "").trim();
      if (selectedType === "task" && !text) {
        type = "reference";
      }
    }

    if (/(?:^|\s)!(high|urgent)\b/i.test(text)) {
      priority = "high";
      text = text.replace(/(?:^|\s)!(high|urgent)\b/i, " ").trim();
    } else if (/(?:^|\s)!(low)\b/i.test(text)) {
      priority = "low";
      text = text.replace(/(?:^|\s)!(low)\b/i, " ").trim();
    } else if (/(?:^|\s)!(med|medium)\b/i.test(text)) {
      priority = "medium";
      text = text.replace(/(?:^|\s)!(med|medium)\b/i, " ").trim();
    }

    if (/(?:^|\s)@today\b/i.test(text)) {
      plannedDate = today;
      text = text.replace(/(?:^|\s)@today\b/i, " ").trim();
    } else if (/(?:^|\s)@(tomorrow|tmr)\b/i.test(text)) {
      plannedDate = DateUtils.addDays(today, 1);
      text = text.replace(/(?:^|\s)@(tomorrow|tmr)\b/i, " ").trim();
    } else if (/(?:^|\s)@nextweek\b/i.test(text)) {
      plannedDate = DateUtils.addDays(today, 7);
      text = text.replace(/(?:^|\s)@nextweek\b/i, " ").trim();
    } else {
      const dateMatch = text.match(/(?:^|\s)@(\d{4}-\d{2}-\d{2})\b/);
      if (dateMatch) {
        plannedDate = dateMatch[1];
        text = text.replace(dateMatch[0], " ").trim();
      }
    }

    if (/(?:^|\s)due:today\b/i.test(text)) {
      deadline = today;
      text = text.replace(/(?:^|\s)due:today\b/i, " ").trim();
    } else if (/(?:^|\s)due:(tomorrow|tmr)\b/i.test(text)) {
      deadline = DateUtils.addDays(today, 1);
      text = text.replace(/(?:^|\s)due:(tomorrow|tmr)\b/i, " ").trim();
    } else {
      const dueMatch = text.match(/(?:^|\s)due:(\d{4}-\d{2}-\d{2})\b/i);
      if (dueMatch) {
        deadline = dueMatch[1];
        text = text.replace(dueMatch[0], " ").trim();
      }
    }

    const recMatch = text.match(/(?:^|\s)every:(day|daily|week|weekly|month|monthly)\b/i);
    if (recMatch) {
      const tok = recMatch[1].toLowerCase();
      recurrence = tok.startsWith("day") || tok === "daily" ? "daily" : tok.startsWith("week") ? "weekly" : "monthly";
      text = text.replace(recMatch[0], " ").trim();
    }

    const projMatch = text.match(/(?:^|\s)#([a-zA-Z0-9_-]+)/);
    if (projMatch) {
      const key = projMatch[1].toLowerCase();
      const found = store
        .getByType("project")
        .find(p => p.title.toLowerCase().includes(key));
      if (found) {
        projectId = found.id;
        matchedProjectTitle = found.title;
        text = text.replace(projMatch[0], " ").trim();
      }
    }

    return {
      cleanTitle: text.replace(/\s+/g, " ").trim(),
      type,
      priority,
      plannedDate: plannedDate || (type === "event" ? defaultDate : ""),
      deadline,
      recurrence,
      projectId,
      matchedProjectTitle,
      url
    };
  }
};

/* ==========================================================================
   MODULE 5: NORMALIZED RELATIONAL STORE
   ========================================================================== */
const STORAGE_KEY = "dayline_workspace_v2";

function createSeedWorkspace() {
  const today = DateUtils.todayISO();
  const yesterday = DateUtils.addDays(today, -1);
  const twoDaysAgo = DateUtils.addDays(today, -2);
  const tomorrow = DateUtils.addDays(today, 1);
  const inThreeDays = DateUtils.addDays(today, 3);
  const inTwoWeeks = DateUtils.addDays(today, 14);

  return [
    {
      id: "goal-1",
      type: "goal",
      title: "Excel in Semester Examinations & Political Theory",
      description: "Master core constitutional modules, complete past papers, and maintain structured revision notes.",
      status: "active",
      targetDate: inTwoWeeks,
      measurementMethod: "Complete 100% of syllabus units & 5 past papers",
      createdAt: today
    },
    {
      id: "goal-2",
      type: "goal",
      title: "Ship Production-Grade Client-Side Web Systems",
      description: "Build resilient zero-dependency web architectures, offline PWAs, and clean UI systems.",
      status: "active",
      targetDate: inTwoWeeks,
      measurementMethod: "Milestone & project completion driven",
      createdAt: today
    },
    {
      id: "proj-1",
      type: "project",
      title: "Complete Semester Examination Syllabus",
      description: "Chapter-by-chapter revision, active recall notes, and previous-year question bank practice.",
      status: "active",
      priority: "high",
      startDate: today,
      targetDate: inTwoWeeks,
      goalId: "goal-1",
      progressMode: "auto",
      manualProgress: 50,
      createdAt: today
    },
    {
      id: "proj-2",
      type: "project",
      title: "Dayline Personal Workspace PWA",
      description: "Full implementation of the Monograph 6-item relational architecture with offline support.",
      status: "active",
      priority: "high",
      startDate: today,
      targetDate: inThreeDays,
      goalId: "goal-2",
      progressMode: "auto",
      manualProgress: 80,
      createdAt: today
    },
    {
      id: "task-1",
      type: "task",
      title: "Revise 73rd Amendment & Panchayati Raj institutions",
      description: "Focus on Gram Sabha powers, three-tier structure, and State Finance Commission.",
      plannedDate: today,
      plannedTime: "18:00",
      deadline: tomorrow,
      priority: "high",
      status: "in_progress",
      recurrence: "none",
      projectId: "proj-1",
      goalId: "goal-1",
      focusMinutes: 25,
      subtasks: [
        { id: "st-1", title: "Read constitutional articles 243 to 243O", done: true },
        { id: "st-2", title: "Summarize Assam Panchayati Raj practice notes", done: false }
      ],
      createdAt: today
    },
    {
      id: "task-2",
      type: "task",
      title: "Solve previous-year question paper (Section A & B)",
      description: "90-minute timed writing practice followed by self-evaluation.",
      plannedDate: tomorrow,
      plannedTime: "10:00",
      deadline: inThreeDays,
      priority: "high",
      status: "open",
      recurrence: "none",
      projectId: "proj-1",
      goalId: "goal-1",
      focusMinutes: 0,
      subtasks: [],
      createdAt: today
    },
    {
      id: "task-3",
      type: "task",
      title: "Audit SVG sizing, Kanban view & PWA manifest",
      description: "Verify all icons scale cleanly and offline storage persists across reloads.",
      plannedDate: today,
      plannedTime: "14:00",
      deadline: today,
      priority: "medium",
      status: "completed",
      completedAt: today,
      recurrence: "none",
      projectId: "proj-2",
      goalId: "goal-2",
      focusMinutes: 50,
      subtasks: [],
      createdAt: today
    },
    {
      id: "task-4",
      type: "task",
      title: "Organize digital PDF handouts & archive old notes",
      description: "Unscheduled anytime maintenance task.",
      plannedDate: "",
      plannedTime: "",
      deadline: "",
      priority: "low",
      status: "open",
      recurrence: "none",
      projectId: "proj-1",
      goalId: "goal-1",
      focusMinutes: 0,
      subtasks: [],
      createdAt: today
    },
    {
      id: "evt-1",
      type: "event",
      title: "Department Lecture: Comparative Governance",
      description: "Bring seminar notes and annotated readings.",
      startDate: today,
      startTime: "11:00",
      endTime: "12:30",
      location: "Lecture Hall 204",
      projectId: "proj-1",
      goalId: "goal-1",
      createdAt: today
    },
    {
      id: "evt-2",
      type: "event",
      title: "Mid-Semester Written Assessment",
      description: "Covers Units 1 through 3.",
      startDate: inThreeDays,
      startTime: "09:30",
      endTime: "12:30",
      location: "Main Examination Hall",
      projectId: "proj-1",
      goalId: "goal-1",
      createdAt: today
    },
    {
      id: "rt-1",
      type: "routine",
      title: "Morning Dayline Triage & Daily Plan",
      description: "Check today's events, pick top focus task, and review deadlines.",
      frequency: "daily",
      preferredTime: "08:00",
      startDate: DateUtils.addDays(today, -10),
      completedDates: [twoDaysAgo, yesterday, today],
      goalId: "goal-2",
      createdAt: today
    },
    {
      id: "rt-2",
      type: "routine",
      title: "Evening Active Recall & Syllabus Revision",
      description: "45 minutes of distraction-free revision before dinner.",
      frequency: "daily",
      preferredTime: "20:30",
      startDate: DateUtils.addDays(today, -10),
      completedDates: [twoDaysAgo, yesterday],
      goalId: "goal-1",
      createdAt: today
    },
    {
      id: "ref-1",
      type: "reference",
      title: "73rd Constitutional Amendment & Three-Tier Structure Summary",
      description: "Key provisions: Gram Sabha (Art 243A), Constitution of Panchayats (Art 243B), Reservation of seats (Art 243D), Duration (5 years, Art 243E), Finance Commission (Art 243I).",
      url: "https://india.gov.in/my-government/constitution-india",
      tags: "polity, syllabus, exam",
      projectId: "proj-1",
      goalId: "goal-1",
      createdAt: today
    },
    {
      id: "ref-2",
      type: "reference",
      title: "Dayline Quick Capture Syntax Reference",
      description: "Use @today, @tomorrow, @YYYY-MM-DD for planned date. Use due:tomorrow or due:YYYY-MM-DD for deadlines. Use !high, !med, !low for priority. Use every:day or every:week for recurrence. Use #projectkeyword to auto-link a project.",
      url: "",
      tags: "guide, shortcuts, workflow",
      projectId: "proj-2",
      goalId: "goal-2",
      createdAt: today
    }
  ];
}

class WorkspaceStore {
  constructor() {
    this.items = [];
    this.lastDeleted = null;
    this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw !== null) {
        this.items = JSON.parse(raw);
      } else {
        this.items = createSeedWorkspace();
        this.save();
      }
    } catch (_) {
      this.items = createSeedWorkspace();
    }
  }

  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
  }

  resetToDemo() {
    this.items = createSeedWorkspace();
    this.save();
  }

  clearAll() {
    this.items = [];
    this.save();
  }

  getAll() {
    return this.items;
  }

  getByType(type) {
    return this.items.filter(i => i.type === type);
  }

  getById(id) {
    return this.items.find(i => i.id === id) || null;
  }

  upsert(itemData) {
    if (itemData.id) {
      const idx = this.items.findIndex(i => i.id === itemData.id);
      if (idx > -1) {
        this.items[idx] = { ...this.items[idx], ...itemData };
        this.save();
        return this.items[idx];
      }
    }
    const newItem = {
      ...itemData,
      id: `${itemData.type}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 5)}`,
      createdAt: DateUtils.todayISO()
    };
    if (newItem.type === "routine" && !Array.isArray(newItem.completedDates)) {
      newItem.completedDates = [];
    }
    if (newItem.type === "task" && !Array.isArray(newItem.subtasks)) {
      newItem.subtasks = [];
    }
    this.items.unshift(newItem);
    this.save();
    return newItem;
  }

  delete(id) {
    const target = this.getById(id);
    if (!target) return null;
    this.lastDeleted = { ...target };
    this.items = this.items.filter(i => i.id !== id);
    this.save();
    return target;
  }

  restoreLastDeleted() {
    if (!this.lastDeleted) return false;
    this.items.unshift(this.lastDeleted);
    this.lastDeleted = null;
    this.save();
    return true;
  }

  toggleTaskCompletion(id) {
    const item = this.getById(id);
    if (!item || item.type !== "task") return null;
    const today = DateUtils.todayISO();

    if (item.status === "completed") {
      item.status = "open";
      delete item.completedAt;
      this.save();
      return { state: "reopened", item };
    } else {
      if (item.recurrence && item.recurrence !== "none") {
        const baseDate = item.plannedDate || today;
        const offset = item.recurrence === "daily" ? 1 : item.recurrence === "weekly" ? 7 : 30;
        item.plannedDate = DateUtils.addDays(baseDate, offset);
        item.lastCompletedAt = today;
        this.save();
        return { state: "rescheduled", nextDate: item.plannedDate, item };
      } else {
        item.status = "completed";
        item.completedAt = today;
        this.save();
        return { state: "completed", item };
      }
    }
  }

  cycleTaskStatus(id) {
    const item = this.getById(id);
    if (!item || item.type !== "task") return;
    const order = ["open", "in_progress", "deferred", "completed"];
    const nextIdx = (order.indexOf(item.status || "open") + 1) % order.length;
    item.status = order[nextIdx];
    if (item.status === "completed") {
      item.completedAt = DateUtils.todayISO();
    } else {
      delete item.completedAt;
    }
    this.save();
  }

  addSubtask(taskId, title) {
    const task = this.getById(taskId);
    if (!task || !title.trim()) return;
    if (!Array.isArray(task.subtasks)) task.subtasks = [];
    task.subtasks.push({
      id: `st-${Date.now().toString(36)}`,
      title: title.trim(),
      done: false
    });
    this.save();
  }

  toggleSubtask(taskId, subtaskId) {
    const task = this.getById(taskId);
    if (!task || !Array.isArray(task.subtasks)) return;
    const st = task.subtasks.find(s => s.id === subtaskId);
    if (st) {
      st.done = !st.done;
      this.save();
    }
  }

  deleteSubtask(taskId, subtaskId) {
    const task = this.getById(taskId);
    if (!task || !Array.isArray(task.subtasks)) return;
    task.subtasks = task.subtasks.filter(s => s.id !== subtaskId);
    this.save();
  }

  toggleRoutineOnDate(id, isoDate) {
    const routine = this.getById(id);
    if (!routine || routine.type !== "routine") return;
    if (!Array.isArray(routine.completedDates)) {
      routine.completedDates = [];
    }
    const idx = routine.completedDates.indexOf(isoDate);
    if (idx > -1) {
      routine.completedDates.splice(idx, 1);
    } else {
      routine.completedDates.push(isoDate);
    }
    this.save();
  }

  rescheduleAllOverdueToToday() {
    const today = DateUtils.todayISO();
    let count = 0;
    this.getByType("task").forEach(t => {
      if (t.status !== "completed" && t.status !== "cancelled") {
        if ((t.plannedDate && t.plannedDate < today) || (t.deadline && t.deadline < today)) {
          t.plannedDate = today;
          count++;
        }
      }
    });
    if (count > 0) this.save();
    return count;
  }

  clearCompletedTasks() {
    const before = this.items.length;
    this.items = this.items.filter(i => !(i.type === "task" && i.status === "completed"));
    const removed = before - this.items.length;
    if (removed > 0) this.save();
    return removed;
  }

  computeProjectProgress(project) {
    const projectTasks = this.items.filter(
      i => i.type === "task" && i.projectId === project.id && i.status !== "cancelled"
    );
    if (projectTasks.length > 0 && project.progressMode !== "manual") {
      const done = projectTasks.filter(t => t.status === "completed").length;
      return {
        percent: Math.round((done / projectTasks.length) * 100),
        mode: "auto",
        label: `${done}/${projectTasks.length} tasks`
      };
    }
    return {
      percent: Number(project.manualProgress || 0),
      mode: "manual",
      label: "Manual progress"
    };
  }

  computeGoalProgress(goal) {
    const linkedProjects = this.items.filter(i => i.type === "project" && i.goalId === goal.id);
    const linkedTasks = this.items.filter(i => i.type === "task" && i.goalId === goal.id);
    if (linkedProjects.length > 0) {
      const avg = Math.round(
        linkedProjects.reduce((acc, p) => acc + this.computeProjectProgress(p).percent, 0) /
          linkedProjects.length
      );
      return { percent: avg, label: `${linkedProjects.length} linked project(s)` };
    }
    if (linkedTasks.length > 0) {
      const done = linkedTasks.filter(t => t.status === "completed").length;
      return {
        percent: Math.round((done / linkedTasks.length) * 100),
        label: `${done}/${linkedTasks.length} linked tasks`
      };
    }
    return {
      percent: goal.status === "achieved" ? 100 : 0,
      label: goal.measurementMethod || "Qualitative goal"
    };
  }
}

/* ==========================================================================
   MODULE 6: RULE-BASED FOCUS SUGGESTION ENGINE
   ========================================================================== */
const FocusEngine = {
  getBestNextTask(store) {
    const today = DateUtils.todayISO();
    const openTasks = store
      .getByType("task")
      .filter(t => t.status !== "completed" && t.status !== "cancelled" && t.status !== "deferred");

    if (openTasks.length === 0) return null;

    const scored = openTasks.map(task => {
      let score = 0;
      const reasons = [];

      if (task.deadline && task.deadline < today) {
        score += 100;
        reasons.push("Overdue deadline");
      } else if (task.deadline === today) {
        score += 80;
        reasons.push("Deadline today");
      } else if (task.plannedDate && task.plannedDate < today) {
        score += 65;
        reasons.push("Past planned date");
      } else if (task.plannedDate === today) {
        score += 55;
        reasons.push("Planned for today");
      }

      if (task.priority === "high") {
        score += 35;
        reasons.push("High priority");
      } else if (task.priority === "medium") {
        score += 18;
        reasons.push("Medium priority");
      }

      if (task.status === "in_progress") {
        score += 22;
        reasons.push("In progress");
      }

      if (task.projectId) {
        const proj = store.getById(task.projectId);
        if (proj && proj.status === "active") {
          score += 10;
          reasons.push(`Project: ${proj.title}`);
        }
      }

      return {
        task,
        score,
        reasonText: reasons.slice(0, 3).join(" • ") || "Next open action"
      };
    });

    scored.sort((a, b) => b.score - a.score);
    return scored[0];
  }
};

/* ==========================================================================
   MODULE 7: PWA MANIFEST & OFFLINE SERVICE WORKER BOOTSTRAPPER
   ========================================================================== */
const PWAManager = {
  deferredPrompt: null,

  init() {
    this.injectDynamicManifest();
    this.registerServiceWorker();
    this.handleInstallPrompt();
  },

  injectDynamicManifest() {
    const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="112" fill="#09090b"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#fafafa" font-family="monospace" font-weight="700" font-size="220">DL</text></svg>`;
    const iconUrl = `data:image/svg+xml;utf8,${encodeURIComponent(iconSvg)}`;

    const manifest = {
      name: "Dayline — Personal Workspace",
      short_name: "Dayline",
      description: "Personal productivity workspace for tasks, events, routines, projects, goals, and references.",
      start_url: "./index.html",
      display: "standalone",
      background_color: "#09090b",
      theme_color: "#09090b",
      icons: [
        { src: iconUrl, sizes: "192x192", type: "image/svg+xml", purpose: "any maskable" },
        { src: iconUrl, sizes: "512x512", type: "image/svg+xml", purpose: "any maskable" }
      ]
    };

    const blob = new Blob([JSON.stringify(manifest)], { type: "application/manifest+json" });
    const link = document.getElementById("pwaManifestLink");
    if (link) link.href = URL.createObjectURL(blob);
  },

  registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    const swCode = `
      const CACHE_NAME = 'dayline-pwa-v2';
      self.addEventListener('install', e => { self.skipWaiting(); });
      self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
      self.addEventListener('fetch', e => {
        if (e.request.method !== 'GET') return;
        e.respondWith(
          fetch(e.request)
            .then(res => {
              const copy = res.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(e.request, copy));
              return res;
            })
            .catch(() => caches.match(e.request))
        );
      });
    `;
    try {
      const blob = new Blob([swCode], { type: "application/javascript" });
      const swUrl = URL.createObjectURL(blob);
      navigator.serviceWorker.register(swUrl).catch(() => {});
    } catch (_) {}
  },

  handleInstallPrompt() {
    const installBtn = document.getElementById("installPwaBtn");
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      this.deferredPrompt = e;
      if (installBtn) installBtn.style.display = "inline-flex";
    });

    if (installBtn) {
      installBtn.addEventListener("click", async () => {
        if (!this.deferredPrompt) return;
        this.deferredPrompt.prompt();
        await this.deferredPrompt.userChoice;
        this.deferredPrompt = null;
        installBtn.style.display = "none";
      });
    }
  }
};

/* ==========================================================================
   MODULE 8: APPLICATION CONTROLLER & UI RENDERER
   ========================================================================== */
class DaylineApp {
  constructor() {
    this.store = new WorkspaceStore();
    this.currentView = "overview";
    this.selectedDate = DateUtils.todayISO();

    this.taskFilter = "all";
    this.taskLayout = "list";
    this.projectFilter = "all";
    this.refTagFilter = "all";
    this.searchQuery = "";
    this.searchTypeFilter = "all";
    this.searchPriorityFilter = "all";
    this.searchSort = "smart";
    this.editingType = "task";

    this.activeFocusTaskId = null;
    this.timerDurationMinutes = 25;
    this.timerSeconds = 25 * 60;
    this.timerRunning = false;
    this.timerInterval = null;

    this.hydrateStaticIcons();
    this.initTheme();
    this.bindStaticEvents();
    this.renderAll();
    PWAManager.init();
  }

  hydrateStaticIcons() {
    document.querySelectorAll(".icon-slot[data-icon]").forEach(slot => {
      const key = slot.dataset.icon;
      if (Icons[key]) slot.innerHTML = Icons[key];
    });
  }

  initTheme() {
    const savedTheme = localStorage.getItem("dayline_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateThemeIcon();
  }

  updateThemeIcon() {
    const current = document.documentElement.getAttribute("data-theme");
    const btn = document.getElementById("themeToggleBtn");
    if (btn) btn.innerHTML = current === "dark" ? Icons.sun : Icons.moon;
    const meta = document.getElementById("metaThemeColor");
    if (meta) meta.setAttribute("content", current === "dark" ? "#09090b" : "#f6f6f4");
  }

  showToast(message, withUndo = false) {
    const stack = document.getElementById("toastStack");
    if (!stack) return;
    const toast = document.createElement("div");
    toast.className = "toast-item";
    toast.innerHTML = `
      <span>${this.escapeHTML(message)}</span>
      ${withUndo ? `<button type="button" class="toast-undo-btn">UNDO</button>` : ""}
    `;
    stack.appendChild(toast);

    if (withUndo) {
      const undoBtn = toast.querySelector(".toast-undo-btn");
      undoBtn.addEventListener("click", () => {
        if (this.store.restoreLastDeleted()) {
          this.renderAll();
          toast.remove();
        }
      });
    }

    setTimeout(() => {
      toast.remove();
    }, 4500);
  }

  bindStaticEvents() {
    const now = new Date();
    document.getElementById("currentDateLabel").textContent = now.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric"
    });

    document.getElementById("themeToggleBtn").addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("dayline_theme", next);
      this.updateThemeIcon();
    });

    document.getElementById("quickSearchBtn").addEventListener("click", () => {
      this.currentView = "search";
      this.renderAll();
      setTimeout(() => {
        const el = document.getElementById("globalSearchInput");
        if (el) el.focus();
      }, 40);
    });

    window.addEventListener("keydown", e => {
      const tag = (e.target.tagName || "").toLowerCase();
      const isTyping = tag === "input" || tag === "textarea" || tag === "select";

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        this.currentView = "search";
        this.renderAll();
        setTimeout(() => document.getElementById("globalSearchInput")?.focus(), 40);
      } else if (e.key === "/" && !isTyping) {
        e.preventDefault();
        document.getElementById("quickCaptureInput")?.focus();
      } else if (e.key === "Escape") {
        this.closeEditorModal();
        this.closeInspectorModal();
        document.getElementById("dataModal")?.classList.remove("open");
      }
    });

    document.getElementById("newItemBtn").addEventListener("click", () => {
      const defaultType =
        this.currentView === "projects"
          ? "project"
          : this.currentView === "goals"
          ? "goal"
          : this.currentView === "references"
          ? "reference"
          : this.currentView === "schedule"
          ? "event"
          : "task";
      this.openEditorModal(defaultType);
    });

    const qcInput = document.getElementById("quickCaptureInput");
    const qcType = document.getElementById("quickCaptureType");
    const qcPreview = document.getElementById("capturePreview");

    const updateCapturePreview = () => {
      const raw = qcInput.value.trim();
      if (!raw) {
        qcPreview.hidden = true;
        qcPreview.innerHTML = "";
        return;
      }
      const parsed = NLPParser.parse(raw, qcType.value, this.store, this.selectedDate);
      const chips = [];
      chips.push(`<span class="badge badge-type">${parsed.type}</span>`);
      if (parsed.priority) chips.push(`<span class="badge">Priority: ${parsed.priority}</span>`);
      if (parsed.plannedDate) chips.push(`<span class="badge">Planned: ${DateUtils.formatReadable(parsed.plannedDate)}</span>`);
      if (parsed.deadline) chips.push(`<span class="badge badge-warn">Due: ${DateUtils.formatReadable(parsed.deadline)}</span>`);
      if (parsed.recurrence !== "none") chips.push(`<span class="badge">Repeats: ${parsed.recurrence}</span>`);
      if (parsed.matchedProjectTitle) chips.push(`<span class="badge">Project: ${this.escapeHTML(parsed.matchedProjectTitle)}</span>`);
      if (parsed.url) chips.push(`<span class="badge">URL attached</span>`);

      qcPreview.hidden = false;
      qcPreview.innerHTML = `<span>Parsed →</span> ${chips.join("")}`;
    };

    qcInput.addEventListener("input", updateCapturePreview);
    qcType.addEventListener("change", updateCapturePreview);

    document.getElementById("quickCaptureForm").addEventListener("submit", e => {
      e.preventDefault();
      const raw = qcInput.value.trim();
      if (!raw) return;

      const parsed = NLPParser.parse(raw, qcType.value, this.store, this.selectedDate);
      const payload = {
        type: parsed.type,
        title: parsed.cleanTitle || raw,
        description: ""
      };

      if (parsed.type === "task") {
        payload.priority = parsed.priority;
        payload.status = "open";
        payload.plannedDate = parsed.plannedDate;
        payload.deadline = parsed.deadline;
        payload.recurrence = parsed.recurrence;
        payload.projectId = parsed.projectId;
      } else if (parsed.type === "event") {
        payload.startDate = parsed.plannedDate || this.selectedDate;
        payload.startTime = "10:00";
        payload.endTime = "11:00";
        payload.projectId = parsed.projectId;
      } else if (parsed.type === "routine") {
        payload.frequency = parsed.recurrence !== "none" ? parsed.recurrence : "daily";
        payload.preferredTime = "08:00";
        payload.completedDates = [];
      } else if (parsed.type === "project") {
        payload.status = "active";
        payload.priority = parsed.priority;
        payload.targetDate = parsed.deadline || parsed.plannedDate;
        payload.progressMode = "auto";
      } else if (parsed.type === "goal") {
        payload.status = "active";
        payload.targetDate = parsed.deadline || parsed.plannedDate;
      } else if (parsed.type === "reference") {
        payload.url = parsed.url;
        payload.projectId = parsed.projectId;
      }

      this.store.upsert(payload);
      qcInput.value = "";
      qcPreview.hidden = true;
      this.showToast(`Captured ${parsed.type}: "${payload.title}"`);
      this.renderAll();
    });

    document.getElementById("closeEditorBtn").addEventListener("click", () => this.closeEditorModal());
    document.getElementById("cancelEditorBtn").addEventListener("click", () => this.closeEditorModal());
    document.getElementById("editorModal").addEventListener("click", e => {
      if (e.target.id === "editorModal") this.closeEditorModal();
    });

    document.getElementById("inspectorModal").addEventListener("click", e => {
      if (e.target.id === "inspectorModal") this.closeInspectorModal();
    });

    const openDataModal = () => {
      this.renderStorageStats();
      document.getElementById("dataModal").classList.add("open");
    };
    const closeDataModal = () => document.getElementById("dataModal").classList.remove("open");

    document.getElementById("desktopDataBtn").addEventListener("click", openDataModal);
    document.getElementById("mobileDataBtn").addEventListener("click", openDataModal);
    document.getElementById("closeDataModalBtn").addEventListener("click", closeDataModal);
    document.getElementById("dataModal").addEventListener("click", e => {
      if (e.target.id === "dataModal") closeDataModal();
    });

    document.getElementById("exportJsonBtn").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(this.store.getAll(), null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `dayline-workspace-${DateUtils.todayISO()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      this.showToast("Exported JSON backup");
    });

    document.getElementById("importJsonInput").addEventListener("change", e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        try {
          const parsed = JSON.parse(ev.target.result);
          if (Array.isArray(parsed)) {
            this.store.items = parsed;
            this.store.save();
            closeDataModal();
            this.showToast(`Imported ${parsed.length} items`);
            this.renderAll();
          }
        } catch (_) {
          this.showToast("Invalid JSON backup file");
        }
      };
      reader.readAsText(file);
    });

    document.getElementById("enableNotificationsBtn").addEventListener("click", async () => {
      if (!("Notification" in window)) {
        this.showToast("Browser notifications not supported on this device");
        return;
      }
      const perm = await Notification.requestPermission();
      document.getElementById("notificationBtnLabel").textContent =
        perm === "granted" ? "Notifications Enabled ✓" : "Permission Denied";
      this.showToast(`Notification permission: ${perm}`);
    });

    document.getElementById("resetDemoBtn").addEventListener("click", () => {
      this.store.resetToDemo();
      closeDataModal();
      this.showToast("Loaded sample workspace");
      this.renderAll();
    });

    document.getElementById("clearWorkspaceBtn").addEventListener("click", () => {
      this.store.clearAll();
      closeDataModal();
      this.showToast("Cleared workspace to a blank slate");
      this.renderAll();
    });

    document.getElementById("dockToggleBtn").addEventListener("click", () => {
      this.toggleFocusTimer(this.activeFocusTaskId);
    });
    document.getElementById("dockResetBtn").addEventListener("click", () => {
      this.resetFocusTimer();
    });
    document.getElementById("dockDoneBtn").addEventListener("click", () => {
      if (this.activeFocusTaskId) {
        this.store.toggleTaskCompletion(this.activeFocusTaskId);
        SoundFX.playChime("complete");
        this.showToast("Focus task completed!");
      }
      this.resetFocusTimer();
      this.renderAll();
    });

    document.getElementById("itemForm").addEventListener("submit", e => {
      e.preventDefault();
      this.saveEditorForm();
    });
  }

  renderStorageStats() {
    const all = this.store.getAll();
    const bytes = new Blob([JSON.stringify(all)]).size;
    const kb = (bytes / 1024).toFixed(2);
    const box = document.getElementById("storageStatsBox");
    if (box) {
      box.textContent = `Total Items: ${all.length} • LocalStorage Footprint: ${kb} KB • Origin Sync: Active`;
    }
  }

  renderAll() {
    this.renderNavigation();
    this.renderMainView();
    this.syncFocusDock();
  }

  renderNavigation() {
    const openTasksCount = this.store
      .getByType("task")
      .filter(t => t.status !== "completed" && t.status !== "cancelled").length;
    const activeProjectsCount = this.store
      .getByType("project")
      .filter(p => p.status === "active").length;

    const navConfig = [
      { id: "overview", label: "Overview", icon: Icons.dashboard, badge: "" },
      { id: "tasks", label: "Tasks", icon: Icons.task, badge: openTasksCount },
      { id: "schedule", label: "Schedule", icon: Icons.event, badge: "" },
      { id: "projects", label: "Projects", icon: Icons.project, badge: activeProjectsCount },
      { id: "goals", label: "Goals", icon: Icons.goal, badge: "" },
      { id: "references", label: "Vault", icon: Icons.reference, badge: "" },
      //{ id: "search", label: "Review", icon: Icons.search, badge: "" }
    ];

    const container = document.getElementById("navLinks");
    container.innerHTML = navConfig
      .map(
        item => `
        <button type="button" class="nav-item ${this.currentView === item.id ? "active" : ""}" data-view="${item.id}">
          ${item.icon}
          <span>${item.label}</span>
          ${item.badge !== "" ? `<span class="nav-badge">${item.badge}</span>` : ""}
        </button>
      `
      )
      .join("");

    container.querySelectorAll(".nav-item").forEach(btn => {
      btn.addEventListener("click", () => {
        this.currentView = btn.dataset.view;
        this.renderAll();
      });
    });

    const titles = {
      overview: "Overview",
      tasks: "Tasks",
      schedule: "Schedule",
      projects: "Projects",
      goals: "Goals",
      references: "References",
      search: "Search"
    };
    document.getElementById("viewHeading").textContent = titles[this.currentView] || "Overview";
  }

  renderMainView() {
    const root = document.getElementById("viewRoot");
    if (this.currentView === "overview") {
      root.innerHTML = this.buildOverviewHTML();
      this.bindOverviewEvents();
    } else if (this.currentView === "tasks") {
      root.innerHTML = this.buildTasksViewHTML();
      this.bindCollectionEvents();
    } else if (this.currentView === "schedule") {
      root.innerHTML = this.buildScheduleViewHTML();
      this.bindOverviewEvents();
      this.bindCollectionEvents();
    } else if (this.currentView === "projects") {
      root.innerHTML = this.buildProjectsViewHTML();
      this.bindCollectionEvents();
    } else if (this.currentView === "goals") {
      root.innerHTML = this.buildGoalsViewHTML();
      this.bindCollectionEvents();
    } else if (this.currentView === "references") {
      root.innerHTML = this.buildReferencesViewHTML();
      this.bindCollectionEvents();
    } else if (this.currentView === "search") {
      root.innerHTML = this.buildSearchViewHTML();
      this.bindSearchEvents();
      this.bindCollectionEvents();
    }
  }

  buildOverviewHTML() {
    const today = DateUtils.todayISO();
    const tasks = this.store.getByType("task");
    const openTasks = tasks.filter(t => t.status !== "completed" && t.status !== "cancelled");
    const dueToday = openTasks.filter(t => t.plannedDate === today || t.deadline === today);
    const overdue = openTasks.filter(
      t => (t.deadline && t.deadline < today) || (t.plannedDate && t.plannedDate < today)
    );
    const activeProjects = this.store.getByType("project").filter(p => p.status === "active");
    const routines = this.store.getByType("routine");
    const routinesDoneToday = routines.filter(r => (r.completedDates || []).includes(today)).length;

    const focusRec = FocusEngine.getBestNextTask(this.store);
    const mins = String(Math.floor(this.timerSeconds / 60)).padStart(2, "0");
    const secs = String(this.timerSeconds % 60).padStart(2, "0");

    const weekDays = DateUtils.getWeekDays(this.selectedDate);
    const dayScheduleHTML = this.buildDayScheduleListHTML(this.selectedDate);

    const sortedTasks = [...openTasks].sort((a, b) => {
      const aOver = a.deadline && a.deadline < today ? 1 : 0;
      const bOver = b.deadline && b.deadline < today ? 1 : 0;
      if (aOver !== bOver) return bOver - aOver;
      const pWeight = { high: 3, medium: 2, low: 1 };
      return (pWeight[b.priority] || 1) - (pWeight[a.priority] || 1);
    });

    return `
      <div class="metrics-grid">
        <div class="metric-card" data-jump="tasks">
          <div class="metric-label">Open Tasks</div>
          <div class="metric-value">${openTasks.length}</div>
          <div class="metric-sub">${overdue.length ? `${overdue.length} need attention` : "Zero overdue"}</div>
        </div>
        <div class="metric-card" data-jump="schedule">
          <div class="metric-label">Today's Agenda</div>
          <div class="metric-value">${dueToday.length}</div>
          <div class="metric-sub">${DateUtils.formatReadable(today)}</div>
        </div>
        <div class="metric-card" data-jump="projects">
          <div class="metric-label">Active Projects</div>
          <div class="metric-value">${activeProjects.length}</div>
          <div class="metric-sub">Multi-step outcomes</div>
        </div>
        <div class="metric-card" data-jump="schedule">
          <div class="metric-label">Daily Routines</div>
          <div class="metric-value">${routinesDoneToday}/${routines.length}</div>
          <div class="metric-sub">Completed today</div>
        </div>
      </div>

      ${
        focusRec
          ? `
        <section class="focus-card">
          <div class="focus-header">
            <span class="focus-tag">${Icons.bolt} Focus Suggestion</span>
            <span class="focus-reason">${this.escapeHTML(focusRec.reasonText)}</span>
          </div>
          <div class="focus-body">
            <div class="focus-main">
              <h3 data-inspect-id="${focusRec.task.id}">${this.escapeHTML(focusRec.task.title)}</h3>
              <p>${this.escapeHTML(focusRec.task.description || "Highest-leverage next action based on deadlines, priority, and active projects.")}</p>
            </div>
            <div class="focus-controls">
              <button type="button" class="btn btn-sm" id="startFocusBtn" data-focus-task="${focusRec.task.id}">
                ${Icons.play}
                <span>${this.timerRunning && this.activeFocusTaskId === focusRec.task.id ? `Pause (${mins}:${secs})` : `Focus (${mins}:${secs})`}</span>
              </button>
              <button type="button" class="btn btn-sm btn-primary" data-complete-task="${focusRec.task.id}">
                ${Icons.check}
                <span>Complete</span>
              </button>
            </div>
          </div>
        </section>
      `
          : ""
      }

      <section class="dayline-section">
        <div class="section-header">
          <div class="section-title">
            ${Icons.event}
            <span>Dayline — ${DateUtils.formatReadable(this.selectedDate)} (${this.selectedDate})</span>
          </div>
          <div style="display:flex; gap:6px; align-items:center;">
            <input type="date" id="jumpDatePicker" class="ui-select" value="${this.selectedDate}" aria-label="Jump to date" />
            <button type="button" class="btn btn-sm" id="prevWeekBtn" title="Previous Week">${Icons.chevronLeft}</button>
            <button type="button" class="btn btn-sm" id="jumpTodayBtn">Today</button>
            <button type="button" class="btn btn-sm" id="nextWeekBtn" title="Next Week">${Icons.chevronRight}</button>
          </div>
        </div>

        <div class="week-strip">
          ${weekDays
            .map(d => {
              const count = this.countItemsOnDate(d.iso);
              return `
                <div class="day-cell ${d.iso === today ? "today" : ""} ${d.iso === this.selectedDate ? "selected" : ""}" data-select-date="${d.iso}">
                  <span class="day-name">${d.name}</span>
                  <span class="day-num">${d.dayNum}</span>
                  <div class="day-dots">
                    ${Array.from({ length: Math.min(count, 3) })
                      .map(() => `<span class="day-dot"></span>`)
                      .join("")}
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>

        <div class="item-list">
          ${dayScheduleHTML}
        </div>
      </section>

      <div class="dashboard-columns">
        <section class="panel-box">
          <div class="section-header">
            <div class="section-title">${Icons.task} <span>Priority & Upcoming Tasks</span></div>
            <button type="button" class="btn btn-sm" data-jump="tasks">All Tasks</button>
          </div>
          <div class="item-list">
            ${
              sortedTasks.length
                ? sortedTasks.slice(0, 6).map(t => this.renderItemRowHTML(t)).join("")
                : `<div class="empty-state">All tasks complete! Use Quick Capture above to add new work.</div>`
            }
          </div>
        </section>

        <section class="panel-box">
          <div class="section-header">
            <div class="section-title">${Icons.project} <span>Active Projects</span></div>
            <button type="button" class="btn btn-sm" data-jump="projects">All Projects</button>
          </div>
          <div class="item-list">
            ${
              activeProjects.length
                ? activeProjects.map(p => this.renderProjectCardHTML(p)).join("")
                : `<div class="empty-state">No active projects. Create one to group related tasks.</div>`
            }
          </div>
        </section>
      </div>
    `;
  }

  countItemsOnDate(isoDate) {
    const events = this.store.getByType("event").filter(e => e.startDate === isoDate).length;
    const tasks = this.store
      .getByType("task")
      .filter(t => t.status !== "completed" && (t.plannedDate === isoDate || t.deadline === isoDate)).length;
    const routines = this.store
      .getByType("routine")
      .filter(r => DateUtils.isRoutineActiveOnDate(r, isoDate)).length;
    return events + tasks + routines;
  }

  buildDayScheduleListHTML(isoDate) {
    const events = this.store
      .getByType("event")
      .filter(e => e.startDate === isoDate)
      .sort((a, b) => (a.startTime || "99:99").localeCompare(b.startTime || "99:99"));

    const routines = this.store
      .getByType("routine")
      .filter(r => DateUtils.isRoutineActiveOnDate(r, isoDate));

    const tasks = this.store
      .getByType("task")
      .filter(t => t.plannedDate === isoDate || t.deadline === isoDate);

    if (events.length === 0 && routines.length === 0 && tasks.length === 0) {
      return `<div class="empty-state">Nothing scheduled for ${DateUtils.formatReadable(isoDate)}.</div>`;
    }

    return [
      ...events.map(e => this.renderItemRowHTML(e, isoDate)),
      ...routines.map(r => this.renderItemRowHTML(r, isoDate)),
      ...tasks.map(t => this.renderItemRowHTML(t, isoDate))
    ].join("");
  }

  buildTasksViewHTML() {
    const today = DateUtils.todayISO();
    const allTasks = this.store.getByType("task");

    const filtered = allTasks.filter(t => {
      if (this.taskFilter === "completed") return t.status === "completed";
      if (t.status === "completed" || t.status === "cancelled") return false;
      if (this.taskFilter === "today") return t.plannedDate === today || t.deadline === today;
      if (this.taskFilter === "overdue")
        return (t.deadline && t.deadline < today) || (t.plannedDate && t.plannedDate < today);
      if (this.taskFilter === "in_progress") return t.status === "in_progress";
      if (this.taskFilter === "high") return t.priority === "high";
      if (this.taskFilter === "anytime") return !t.plannedDate && !t.deadline;
      return true;
    });

    const filters = [
      { id: "all", label: "All Open" },
      { id: "today", label: "Today" },
      { id: "overdue", label: "Overdue" },
      { id: "in_progress", label: "In Progress" },
      { id: "high", label: "High Priority" },
      { id: "anytime", label: "Anytime" },
      { id: "completed", label: "Completed" }
    ];

    let bodyHTML = "";
    if (this.taskLayout === "kanban") {
      const cols = [
        { key: "open", title: "Open" },
        { key: "in_progress", title: "In Progress" },
        { key: "deferred", title: "Deferred" },
        { key: "completed", title: "Completed" }
      ];
      bodyHTML = `
        <div class="kanban-grid">
          ${cols
            .map(col => {
              const colTasks = allTasks.filter(t => (t.status || "open") === col.key);
              return `
                <div class="kanban-col">
                  <div class="kanban-col-header">
                    <span>${col.title}</span>
                    <span>${colTasks.length}</span>
                  </div>
                  <div class="item-list">
                    ${
                      colTasks.length
                        ? colTasks.map(t => this.renderItemRowHTML(t)).join("")
                        : `<div class="empty-state" style="padding:14px;">Empty</div>`
                    }
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
      `;
    } else {
      bodyHTML = `
        <div class="item-list">
          ${
            filtered.length
              ? filtered.map(t => this.renderItemRowHTML(t)).join("")
              : `<div class="empty-state">No tasks match this filter.</div>`
          }
        </div>
      `;
    }

    return `
      <div class="toolbar-row">
        <div class="filter-bar">
          ${filters
            .map(
              f => `
            <button type="button" class="filter-pill ${this.taskFilter === f.id && this.taskLayout === "list" ? "active" : ""}" data-task-filter="${f.id}">
              ${f.label}
            </button>
          `
            )
            .join("")}
        </div>
        <div style="display:flex; gap:6px;">
          <button type="button" class="btn btn-sm ${this.taskLayout === "list" ? "btn-primary" : ""}" data-task-layout="list">List View</button>
          <button type="button" class="btn btn-sm ${this.taskLayout === "kanban" ? "btn-primary" : ""}" data-task-layout="kanban">Status Board</button>
        </div>
      </div>
      ${bodyHTML}
    `;
  }

  buildScheduleViewHTML() {
    const routines = this.store.getByType("routine");
    const events = this.store
      .getByType("event")
      .sort((a, b) => (a.startDate || "").localeCompare(b.startDate || ""));
    const last7Days = DateUtils.getLastNDays(7);

    return `
      <div class="dashboard-columns">
        <section class="panel-box">
          <div class="section-header">
            <div class="section-title">${Icons.event} <span>Scheduled Events & Commitments</span></div>
            <button type="button" class="btn btn-sm btn-primary" data-open-create="event">+ Event</button>
          </div>
          <div class="item-list">
            ${
              events.length
                ? events.map(e => this.renderItemRowHTML(e)).join("")
                : `<div class="empty-state">No upcoming events scheduled.</div>`
            }
          </div>
        </section>

        <section class="panel-box">
          <div class="section-header">
            <div class="section-title">${Icons.routine} <span>Routines & 7-Day Consistency</span></div>
            <button type="button" class="btn btn-sm btn-primary" data-open-create="routine">+ Routine</button>
          </div>
          <div class="item-list">
            ${
              routines.length
                ? routines
                    .map(r => {
                      const streak = DateUtils.calculateRoutineStreak(r);
                      const completedSet = new Set(r.completedDates || []);
                      return `
                        <div class="item-row" style="flex-direction:column; align-items:stretch;">
                          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
                            <div class="item-content" data-inspect-id="${r.id}">
                              <div class="item-title">${this.escapeHTML(r.title)}</div>
                              <div class="item-meta">
                                <span class="badge">${r.frequency || "daily"} • ${r.preferredTime || "Anytime"}</span>
                                <span class="badge badge-ok">Streak: ${streak}d</span>
                              </div>
                            </div>
                            <div class="item-actions">
                              <button type="button" class="action-icon-btn" data-edit-id="${r.id}">${Icons.edit}</button>
                              <button type="button" class="action-icon-btn" data-delete-id="${r.id}">${Icons.trash}</button>
                            </div>
                          </div>
                          <div class="routine-matrix-row">
                            ${last7Days
                              .map(d => {
                                const done = completedSet.has(d.iso);
                                return `
                                  <button
                                    type="button"
                                    class="matrix-day-btn ${done ? "done" : ""}"
                                    data-complete-routine="${r.id}"
                                    data-routine-date="${d.iso}"
                                    title="Toggle ${d.iso}"
                                  >
                                    <span>${d.shortDay}</span>
                                    <span>${d.dayNum}</span>
                                  </button>
                                `;
                              })
                              .join("")}
                          </div>
                        </div>
                      `;
                    })
                    .join("")
                : `<div class="empty-state">No routines established yet.</div>`
            }
          </div>
        </section>
      </div>
    `;
  }

  buildProjectsViewHTML() {
    const allProjects = this.store.getByType("project");
    const filtered = allProjects.filter(p =>
      this.projectFilter === "all" ? true : (p.status || "active") === this.projectFilter
    );

    const states = ["all", "active", "planned", "paused", "completed"];

    return `
      <div class="toolbar-row">
        <div class="filter-bar">
          ${states
            .map(
              s => `
            <button type="button" class="filter-pill ${this.projectFilter === s ? "active" : ""}" data-project-filter="${s}">
              ${s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          `
            )
            .join("")}
        </div>
        <button type="button" class="btn btn-sm btn-primary" data-open-create="project">+ New Project</button>
      </div>
      <div class="cards-grid">
        ${
          filtered.length
            ? filtered.map(p => this.renderProjectCardHTML(p)).join("")
            : `<div class="empty-state">No projects in this lifecycle state.</div>`
        }
      </div>
    `;
  }

  buildGoalsViewHTML() {
    const goals = this.store.getByType("goal");
    return `
      <div class="toolbar-row">
        <p style="color:var(--text-secondary); font-size:12.5px;">
          Goals connect to your Projects, Routines, and Tasks (Goal → Projects → Tasks). Click any goal to inspect its connected items.
        </p>
        <button type="button" class="btn btn-sm btn-primary" data-open-create="goal">+ New Goal</button>
      </div>
      <div class="cards-grid">
        ${
          goals.length
            ? goals.map(g => this.renderGoalCardHTML(g)).join("")
            : `<div class="empty-state">No goals defined yet.</div>`
        }
      </div>
    `;
  }

  buildReferencesViewHTML() {
    const refs = this.store.getByType("reference");
    const tagSet = new Set();
    refs.forEach(r => {
      (r.tags || "")
        .split(",")
        .map(t => t.trim().toLowerCase())
        .filter(Boolean)
        .forEach(t => tagSet.add(t));
    });
    const tags = ["all", ...Array.from(tagSet)];

    const filtered = refs.filter(r => {
      if (this.refTagFilter === "all") return true;
      const itemTags = (r.tags || "").toLowerCase();
      return itemTags.includes(this.refTagFilter);
    });

    return `
      <div class="toolbar-row">
        <div class="filter-bar">
          ${tags
            .map(
              t => `
            <button type="button" class="filter-pill ${this.refTagFilter === t ? "active" : ""}" data-ref-tag="${this.escapeHTML(t)}">
              ${t === "all" ? "All References" : `#${this.escapeHTML(t)}`}
            </button>
          `
            )
            .join("")}
        </div>
        <button type="button" class="btn btn-sm btn-primary" data-open-create="reference">+ Save Reference</button>
      </div>
      <div class="item-list">
        ${
          filtered.length
            ? filtered.map(r => this.renderItemRowHTML(r)).join("")
            : `<div class="empty-state">No references saved under this tag.</div>`
        }
      </div>
    `;
  }

  buildSearchViewHTML() {
    const today = DateUtils.todayISO();
    const overdueCount = this.store
      .getByType("task")
      .filter(
        t =>
          t.status !== "completed" &&
          t.status !== "cancelled" &&
          ((t.plannedDate && t.plannedDate < today) || (t.deadline && t.deadline < today))
      ).length;
    const completedCount = this.store
      .getByType("task")
      .filter(t => t.status === "completed").length;

    const results = this.getFilteredSearchResults();

    return `
      <div class="triage-banner">
        <div>
          <div style="font-weight:700; font-size:13.5px;">Workspace Review & Triage</div>
          <div style="font-size:12px; color:var(--text-secondary);">
            ${overdueCount} overdue task(s) • ${completedCount} completed task(s) in history
          </div>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button type="button" class="btn btn-sm" id="triageRescheduleBtn" ${overdueCount === 0 ? "disabled" : ""}>
            Reschedule Overdue (${overdueCount}) to Today
          </button>
          <button type="button" class="btn btn-sm" id="triageClearCompletedBtn" ${completedCount === 0 ? "disabled" : ""}>
            Archive Completed (${completedCount})
          </button>
        </div>
      </div>

      <div class="search-toolbar">
        <div class="search-box">
          ${Icons.search}
          <input
            type="text"
            id="globalSearchInput"
            placeholder="Search across all 6 item types (titles, notes, tags, URLs)..."
            value="${this.escapeHTML(this.searchQuery)}"
          />
        </div>
        <div class="select-row">
          <select id="searchTypeSelect" class="ui-select">
            <option value="all" ${this.searchTypeFilter === "all" ? "selected" : ""}>All 6 Item Types</option>
            <option value="task" ${this.searchTypeFilter === "task" ? "selected" : ""}>Tasks</option>
            <option value="event" ${this.searchTypeFilter === "event" ? "selected" : ""}>Events</option>
            <option value="routine" ${this.searchTypeFilter === "routine" ? "selected" : ""}>Routines</option>
            <option value="project" ${this.searchTypeFilter === "project" ? "selected" : ""}>Projects</option>
            <option value="goal" ${this.searchTypeFilter === "goal" ? "selected" : ""}>Goals</option>
            <option value="reference" ${this.searchTypeFilter === "reference" ? "selected" : ""}>References</option>
          </select>

          <select id="searchPrioritySelect" class="ui-select">
            <option value="all" ${this.searchPriorityFilter === "all" ? "selected" : ""}>Any Priority</option>
            <option value="high" ${this.searchPriorityFilter === "high" ? "selected" : ""}>High Priority</option>
            <option value="medium" ${this.searchPriorityFilter === "medium" ? "selected" : ""}>Medium Priority</option>
            <option value="low" ${this.searchPriorityFilter === "low" ? "selected" : ""}>Low Priority</option>
          </select>

          <select id="searchSortSelect" class="ui-select">
            <option value="smart" ${this.searchSort === "smart" ? "selected" : ""}>Sort: Smart Relevance</option>
            <option value="alpha" ${this.searchSort === "alpha" ? "selected" : ""}>Sort: Alphabetical</option>
            <option value="date" ${this.searchSort === "date" ? "selected" : ""}>Sort: Date</option>
          </select>
        </div>
      </div>

      <div class="item-list" id="searchResultsContainer">
        ${
          results.length
            ? results.map(item => this.renderItemRowHTML(item)).join("")
            : `<div class="empty-state">No matching items found.</div>`
        }
      </div>
    `;
  }

  getFilteredSearchResults() {
    const q = this.searchQuery.toLowerCase().trim();
    let list = this.store.getAll().filter(item => {
      if (this.searchTypeFilter !== "all" && item.type !== this.searchTypeFilter) return false;
      if (this.searchPriorityFilter !== "all" && item.priority !== this.searchPriorityFilter) return false;
      if (!q) return true;
      const hay = `${item.title || ""} ${item.description || ""} ${item.tags || ""} ${item.url || ""} ${item.type}`.toLowerCase();
      return hay.includes(q);
    });

    if (this.searchSort === "alpha") {
      list.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    } else if (this.searchSort === "date") {
      list.sort((a, b) => {
        const da = a.plannedDate || a.deadline || a.startDate || a.targetDate || "9999-99-99";
        const db = b.plannedDate || b.deadline || b.startDate || b.targetDate || "9999-99-99";
        return da.localeCompare(db);
      });
    }
    return list;
  }

  renderItemRowHTML(item, contextDate = DateUtils.todayISO()) {
    const today = DateUtils.todayISO();
    const isTask = item.type === "task";
    const isRoutine = item.type === "routine";
    const isCompleted =
      (isTask && item.status === "completed") ||
      (isRoutine && (item.completedDates || []).includes(contextDate));

    const badges = [];
    badges.push(`<span class="badge badge-type">${item.type}</span>`);

    if (isTask && item.status && item.status !== "open" && item.status !== "completed") {
      badges.push(
        `<span class="badge badge-info badge-link" data-cycle-status="${item.id}" title="Click to cycle status">${item.status.replace("_", " ")}</span>`
      );
    }

    if (item.priority) {
      const pClass =
        item.priority === "high" ? "badge-urgent" : item.priority === "medium" ? "badge-warn" : "";
      badges.push(`<span class="badge ${pClass}">${item.priority}</span>`);
    }

    if (item.plannedDate) {
      const isOver = item.status !== "completed" && item.plannedDate < today;
      badges.push(
        `<span class="badge ${isOver ? "badge-urgent" : ""}">Planned: ${DateUtils.formatReadable(item.plannedDate)}${
          item.plannedTime ? ` ${item.plannedTime}` : ""
        }</span>`
      );
    }

    if (item.deadline) {
      const isOver = item.status !== "completed" && item.deadline < today;
      badges.push(
        `<span class="badge ${isOver ? "badge-urgent" : "badge-warn"}">Due: ${DateUtils.formatReadable(item.deadline)}</span>`
      );
    }

    if (isTask && Array.isArray(item.subtasks) && item.subtasks.length > 0) {
      const doneSub = item.subtasks.filter(s => s.done).length;
      badges.push(`<span class="badge">${doneSub}/${item.subtasks.length} steps</span>`);
    }

    if (isTask && item.focusMinutes > 0) {
      badges.push(`<span class="badge">${item.focusMinutes}m focused</span>`);
    }

    if (item.type === "event" && item.startDate) {
      badges.push(
        `<span class="badge">${DateUtils.formatReadable(item.startDate)} ${item.startTime || ""}${
          item.endTime ? `–${item.endTime}` : ""
        }</span>`
      );
      if (item.location) badges.push(`<span class="badge">${this.escapeHTML(item.location)}</span>`);
    }

    if (isRoutine) {
      const streak = DateUtils.calculateRoutineStreak(item);
      badges.push(`<span class="badge">${item.frequency || "daily"} • ${item.preferredTime || "Anytime"}</span>`);
      badges.push(`<span class="badge badge-ok">Streak: ${streak}d</span>`);
    }

    if (item.recurrence && item.recurrence !== "none") {
      badges.push(`<span class="badge">Repeats ${item.recurrence}</span>`);
    }

    if (item.projectId) {
      const proj = this.store.getById(item.projectId);
      if (proj) {
        badges.push(
          `<span class="badge badge-link" data-inspect-id="${proj.id}">${Icons.project} ${this.escapeHTML(proj.title)}</span>`
        );
      }
    }

    if (item.goalId) {
      const goal = this.store.getById(item.goalId);
      if (goal) {
        badges.push(
          `<span class="badge badge-link" data-inspect-id="${goal.id}">${Icons.goal} ${this.escapeHTML(goal.title)}</span>`
        );
      }
    }

    if (item.tags) {
      item.tags
        .split(",")
        .map(t => t.trim())
        .filter(Boolean)
        .forEach(tag => {
          badges.push(`<span class="badge">#${this.escapeHTML(tag)}</span>`);
        });
    }

    if (item.url) {
      badges.push(
        `<a href="${this.escapeHTML(item.url)}" target="_blank" rel="noopener" class="badge badge-link" onclick="event.stopPropagation()">${Icons.link} Link</a>`
      );
    }

    const leftControl = isTask
      ? `<button type="button" class="check-btn ${isCompleted ? "checked" : ""}" data-complete-task="${item.id}" title="Complete task">${
          isCompleted ? Icons.check : ""
        }</button>`
      : isRoutine
      ? `<button type="button" class="check-btn ${isCompleted ? "checked" : ""}" data-complete-routine="${item.id}" data-routine-date="${contextDate}" title="Toggle routine for ${contextDate}">${
          isCompleted ? Icons.check : ""
        }</button>`
      : `<div class="item-type-icon">${Icons[item.type] || Icons.task}</div>`;

    return `
      <div class="item-row ${isCompleted ? "completed" : ""}">
        <div class="item-left">
          ${leftControl}
          <div class="item-content" data-inspect-id="${item.id}">
            <div class="item-title">${this.escapeHTML(item.title)}</div>
            ${item.description ? `<div class="item-desc">${this.escapeHTML(item.description)}</div>` : ""}
            <div class="item-meta">${badges.join("")}</div>
          </div>
        </div>
        <div class="item-actions">
          ${
            isTask && !isCompleted
              ? `<button type="button" class="action-icon-btn" data-start-focus="${item.id}" title="Start Focus Timer on this task">${Icons.play}</button>`
              : ""
          }
          ${
            item.type === "reference"
              ? `<button type="button" class="action-icon-btn" data-copy-ref="${item.id}" title="Copy reference content">${Icons.copy}</button>`
              : ""
          }
          <button type="button" class="action-icon-btn" data-edit-id="${item.id}" title="Edit">${Icons.edit}</button>
          <button type="button" class="action-icon-btn" data-delete-id="${item.id}" title="Delete">${Icons.trash}</button>
        </div>
      </div>
    `;
  }

  renderProjectCardHTML(project) {
    const prog = this.store.computeProjectProgress(project);
    const goal = project.goalId ? this.store.getById(project.goalId) : null;
    return `
      <div class="entity-card" data-inspect-id="${project.id}">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
            <span class="badge badge-type">${project.status || "active"} project</span>
            <div class="item-actions" onclick="event.stopPropagation()">
              <button type="button" class="action-icon-btn" data-edit-id="${project.id}">${Icons.edit}</button>
              <button type="button" class="action-icon-btn" data-delete-id="${project.id}">${Icons.trash}</button>
            </div>
          </div>
          <h3 style="font-size:15px; font-weight:700; margin-top:8px;">${this.escapeHTML(project.title)}</h3>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:4px;">${this.escapeHTML(project.description || "")}</p>
        </div>

        <div>
          <div class="progress-label-row">
            <span>${prog.label} (${prog.mode})</span>
            <span>${prog.percent}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width:${prog.percent}%"></div>
          </div>
          <div class="item-meta" style="margin-top:10px;">
            ${project.targetDate ? `<span class="badge">Target: ${DateUtils.formatReadable(project.targetDate)}</span>` : ""}
            ${goal ? `<span class="badge">${Icons.goal}${this.escapeHTML(goal.title)}</span>` : ""}
          </div>
        </div>
      </div>
    `;
  }

  renderGoalCardHTML(goal) {
    const prog = this.store.computeGoalProgress(goal);
    return `
      <div class="entity-card" data-inspect-id="${goal.id}">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
            <span class="badge badge-type">${goal.status || "active"} goal</span>
            <div class="item-actions" onclick="event.stopPropagation()">
              <button type="button" class="action-icon-btn" data-edit-id="${goal.id}">${Icons.edit}</button>
              <button type="button" class="action-icon-btn" data-delete-id="${goal.id}">${Icons.trash}</button>
            </div>
          </div>
          <h3 style="font-size:15px; font-weight:700; margin-top:8px;">${this.escapeHTML(goal.title)}</h3>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:4px;">${this.escapeHTML(goal.description || "")}</p>
        </div>

        <div>
          <div class="progress-label-row">
            <span>${this.escapeHTML(prog.label)}</span>
            <span>${prog.percent}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width:${prog.percent}%"></div>
          </div>
          <div class="item-meta" style="margin-top:10px;">
            ${goal.targetDate ? `<span class="badge">Horizon: ${DateUtils.formatReadable(goal.targetDate)}</span>` : ""}
            ${goal.measurementMethod ? `<span class="badge">${this.escapeHTML(goal.measurementMethod)}</span>` : ""}
          </div>
        </div>
      </div>
    `;
  }

  bindOverviewEvents() {
    const root = document.getElementById("viewRoot");

    root.querySelectorAll("[data-jump]").forEach(el => {
      el.addEventListener("click", () => {
        this.currentView = el.dataset.jump;
        this.renderAll();
      });
    });

    root.querySelectorAll("[data-select-date]").forEach(cell => {
      cell.addEventListener("click", () => {
        this.selectedDate = cell.dataset.selectDate;
        this.renderMainView();
      });
    });

    const datePicker = document.getElementById("jumpDatePicker");
    if (datePicker) {
      datePicker.addEventListener("change", () => {
        if (datePicker.value) {
          this.selectedDate = datePicker.value;
          this.renderMainView();
        }
      });
    }

    document.getElementById("prevWeekBtn")?.addEventListener("click", () => {
      this.selectedDate = DateUtils.addDays(this.selectedDate, -7);
      this.renderMainView();
    });
    document.getElementById("nextWeekBtn")?.addEventListener("click", () => {
      this.selectedDate = DateUtils.addDays(this.selectedDate, 7);
      this.renderMainView();
    });
    document.getElementById("jumpTodayBtn")?.addEventListener("click", () => {
      this.selectedDate = DateUtils.todayISO();
      this.renderMainView();
    });

    const startFocusBtn = document.getElementById("startFocusBtn");
    if (startFocusBtn) {
      startFocusBtn.addEventListener("click", () => {
        this.toggleFocusTimer(startFocusBtn.dataset.focusTask);
      });
    }

    this.bindCollectionEvents();
  }

  toggleFocusTimer(taskId) {
    if (taskId && this.activeFocusTaskId !== taskId) {
      this.activeFocusTaskId = taskId;
      this.timerSeconds = this.timerDurationMinutes * 60;
    }

    if (this.timerRunning) {
      clearInterval(this.timerInterval);
      this.timerRunning = false;
      this.renderAll();
    } else {
      if (!this.activeFocusTaskId) {
        const rec = FocusEngine.getBestNextTask(this.store);
        if (rec) this.activeFocusTaskId = rec.task.id;
      }
      this.timerRunning = true;
      this.timerInterval = setInterval(() => {
        if (this.timerSeconds > 0) {
          this.timerSeconds--;
          this.syncFocusDock();
        } else {
          clearInterval(this.timerInterval);
          this.timerRunning = false;
          this.timerSeconds = this.timerDurationMinutes * 60;
          if (this.activeFocusTaskId) {
            const task = this.store.getById(this.activeFocusTaskId);
            if (task) {
              task.focusMinutes = (task.focusMinutes || 0) + this.timerDurationMinutes;
              this.store.save();
            }
          }
          SoundFX.playChime("timer");
          this.showToast("Focus session complete! (+25m logged)");
          if ("Notification" in window && Notification.permission === "granted") {
            new Notification("Dayline Focus Complete", { body: "25-minute focus block finished." });
          }
          this.renderAll();
        }
      }, 1000);
      this.renderAll();
    }
  }

  resetFocusTimer() {
    clearInterval(this.timerInterval);
    this.timerRunning = false;
    this.activeFocusTaskId = null;
    this.timerSeconds = this.timerDurationMinutes * 60;
    this.syncFocusDock();
    this.renderMainView();
  }

  syncFocusDock() {
    const dock = document.getElementById("focusDock");
    if (!dock) return;

    if (!this.activeFocusTaskId && !this.timerRunning) {
      dock.hidden = true;
      return;
    }

    dock.hidden = false;
    const task = this.store.getById(this.activeFocusTaskId);
    document.getElementById("focusDockTitle").textContent = task ? task.title : "Focus Session";

    const m = String(Math.floor(this.timerSeconds / 60)).padStart(2, "0");
    const s = String(this.timerSeconds % 60).padStart(2, "0");
    document.getElementById("focusDockClock").textContent = `${m}:${s}`;
    document.getElementById("dockToggleBtn").textContent = this.timerRunning ? "Pause" : "Resume";
  }

  bindCollectionEvents() {
    const root = document.getElementById("viewRoot");

    root.querySelectorAll("[data-task-filter]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.taskFilter = btn.dataset.taskFilter;
        this.taskLayout = "list";
        this.renderMainView();
      });
    });

    root.querySelectorAll("[data-task-layout]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.taskLayout = btn.dataset.taskLayout;
        this.renderMainView();
      });
    });

    root.querySelectorAll("[data-project-filter]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.projectFilter = btn.dataset.projectFilter;
        this.renderMainView();
      });
    });

    root.querySelectorAll("[data-ref-tag]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.refTagFilter = btn.dataset.refTag;
        this.renderMainView();
      });
    });

    root.querySelectorAll("[data-complete-task]").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const res = this.store.toggleTaskCompletion(btn.dataset.completeTask);
        if (res?.state === "completed") {
          SoundFX.playChime("complete");
          this.showToast(`Completed: "${res.item.title}"`);
        } else if (res?.state === "rescheduled") {
          SoundFX.playChime("complete");
          this.showToast(`Recurring task scheduled for ${res.nextDate}`);
        }
        this.renderAll();
      });
    });

    root.querySelectorAll("[data-cycle-status]").forEach(badge => {
      badge.addEventListener("click", e => {
        e.stopPropagation();
        this.store.cycleTaskStatus(badge.dataset.cycleStatus);
        this.renderAll();
      });
    });

    root.querySelectorAll("[data-start-focus]").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        this.toggleFocusTimer(btn.dataset.startFocus);
      });
    });

    root.querySelectorAll("[data-copy-ref]").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const ref = this.store.getById(btn.dataset.copyRef);
        if (ref && navigator.clipboard) {
          navigator.clipboard.writeText(`${ref.title}\n${ref.description || ""}\n${ref.url || ""}`.trim());
          this.showToast("Copied reference to clipboard");
        }
      });
    });

    root.querySelectorAll("[data-complete-routine]").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        this.store.toggleRoutineOnDate(btn.dataset.completeRoutine, btn.dataset.routineDate);
        SoundFX.playChime("complete");
        this.renderAll();
      });
    });

    root.querySelectorAll("[data-inspect-id]").forEach(el => {
      el.addEventListener("click", e => {
        e.stopPropagation();
        this.openInspectorModal(el.dataset.inspectId);
      });
    });

    root.querySelectorAll("[data-edit-id]").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const item = this.store.getById(btn.dataset.editId);
        if (item) this.openEditorModal(item.type, item);
      });
    });

    root.querySelectorAll("[data-delete-id]").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const deleted = this.store.delete(btn.dataset.deleteId);
        if (deleted) {
          this.showToast(`Deleted "${deleted.title}"`, true);
        }
        this.renderAll();
      });
    });

    root.querySelectorAll("[data-open-create]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.openEditorModal(btn.dataset.openCreate);
      });
    });
  }

  bindSearchEvents() {
    const input = document.getElementById("globalSearchInput");
    const typeSel = document.getElementById("searchTypeSelect");
    const prioSel = document.getElementById("searchPrioritySelect");
    const sortSel = document.getElementById("searchSortSelect");

    const refreshList = () => {
      const results = this.getFilteredSearchResults();
      const container = document.getElementById("searchResultsContainer");
      container.innerHTML = results.length
        ? results.map(item => this.renderItemRowHTML(item)).join("")
        : `<div class="empty-state">No matching items found.</div>`;
      this.bindCollectionEvents();
    };

    input?.addEventListener("input", () => {
      this.searchQuery = input.value;
      refreshList();
    });
    typeSel?.addEventListener("change", () => {
      this.searchTypeFilter = typeSel.value;
      refreshList();
    });
    prioSel?.addEventListener("change", () => {
      this.searchPriorityFilter = prioSel.value;
      refreshList();
    });
    sortSel?.addEventListener("change", () => {
      this.searchSort = sortSel.value;
      refreshList();
    });

    document.getElementById("triageRescheduleBtn")?.addEventListener("click", () => {
      const count = this.store.rescheduleAllOverdueToToday();
      this.showToast(`Rescheduled ${count} overdue task(s) to Today`);
      this.renderAll();
    });

    document.getElementById("triageClearCompletedBtn")?.addEventListener("click", () => {
      const count = this.store.clearCompletedTasks();
      this.showToast(`Removed ${count} completed task(s)`);
      this.renderAll();
    });
  }

  openInspectorModal(id) {
    const item = this.store.getById(id);
    if (!item) return;

    const container = document.getElementById("inspectorContent");
    const parentGoal = item.goalId ? this.store.getById(item.goalId) : null;
    const parentProject = item.projectId ? this.store.getById(item.projectId) : null;

    const childProjects =
      item.type === "goal" ? this.store.getByType("project").filter(p => p.goalId === item.id) : [];
    const childTasks = this.store
      .getByType("task")
      .filter(t => t.projectId === item.id || t.goalId === item.id);
    const childRoutines =
      item.type === "goal" ? this.store.getByType("routine").filter(r => r.goalId === item.id) : [];
    const childRefs = this.store
      .getByType("reference")
      .filter(r => r.projectId === item.id || r.goalId === item.id);

    const subtasks = Array.isArray(item.subtasks) ? item.subtasks : [];

    container.innerHTML = `
      <div class="modal-header">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <span class="badge badge-type">${item.type}</span>
          <h2>${this.escapeHTML(item.title)}</h2>
        </div>
        <button type="button" class="btn btn-icon" id="closeInspectorBtn">${Icons.close}</button>
      </div>

      <p style="font-size:13px; color:var(--text-secondary); white-space:pre-wrap;">${this.escapeHTML(
        item.description || "No additional notes."
      )}</p>

      <div class="item-meta" style="margin-top:12px;">
        ${item.status ? `<span class="badge badge-info">Status: ${item.status}</span>` : ""}
        ${item.priority ? `<span class="badge">Priority: ${item.priority}</span>` : ""}
        ${item.plannedDate ? `<span class="badge">Planned: ${item.plannedDate}</span>` : ""}
        ${item.deadline ? `<span class="badge badge-warn">Deadline: ${item.deadline}</span>` : ""}
        ${item.targetDate ? `<span class="badge">Target Date: ${item.targetDate}</span>` : ""}
        ${
          parentGoal
            ? `<span class="badge badge-link" data-jump-inspect="${parentGoal.id}">${Icons.goal} Goal:${this.escapeHTML(
                parentGoal.title
              )}</span>`
            : ""
        }
        ${
          parentProject
            ? `<span class="badge badge-link" data-jump-inspect="${parentProject.id}">${Icons.project} Project:${this.escapeHTML(
                parentProject.title
              )}</span>`
            : ""
        }
      </div>

      ${
        item.type === "task"
          ? `
        <div class="inspector-section">
          <h4>Action Steps / Sub-Checklist (${subtasks.filter(s => s.done).length}/${subtasks.length})</h4>
          <form class="subtask-inline-form" id="addSubtaskForm">
            <input type="text" id="newSubtaskInput" class="field-input" placeholder="Add a micro-step..." />
            <button type="submit" class="btn btn-sm btn-primary">Add Step</button>
          </form>
          <div class="item-list">
            ${
              subtasks.length
                ? subtasks
                    .map(
                      st => `
                  <div class="item-row ${st.done ? "completed" : ""}" style="padding:8px 10px;">
                    <div class="item-left">
                      <button type="button" class="check-btn ${st.done ? "checked" : ""}" data-toggle-subtask="${st.id}">
                        ${st.done ? Icons.check : ""}
                      </button>
                      <span class="item-title" style="font-size:12.5px;">${this.escapeHTML(st.title)}</span>
                    </div>
                    <button type="button" class="action-icon-btn" data-delete-subtask="${st.id}">${Icons.trash}</button>
                  </div>
                `
                    )
                    .join("")
                : `<div class="empty-state" style="padding:12px;">Break this task into smaller steps above.</div>`
            }
          </div>
        </div>
      `
          : ""
      }

      ${
        childProjects.length
          ? `
        <div class="inspector-section">
          <h4>Associated Projects (${childProjects.length})</h4>
          <div class="item-list">
            ${childProjects.map(p => this.renderItemRowHTML(p)).join("")}
          </div>
        </div>
      `
          : ""
      }

      ${
        childTasks.length
          ? `
        <div class="inspector-section">
          <h4>Associated Tasks (${childTasks.length})</h4>
          <div class="item-list">
            ${childTasks.map(t => this.renderItemRowHTML(t)).join("")}
          </div>
        </div>
      `
          : ""
      }

      ${
        childRoutines.length
          ? `
        <div class="inspector-section">
          <h4>Supporting Routines (${childRoutines.length})</h4>
          <div class="item-list">
            ${childRoutines.map(r => this.renderItemRowHTML(r)).join("")}
          </div>
        </div>
      `
          : ""
      }

      ${
        childRefs.length
          ? `
        <div class="inspector-section">
          <h4>Linked Reference Material (${childRefs.length})</h4>
          <div class="item-list">
            ${childRefs.map(r => this.renderItemRowHTML(r)).join("")}
          </div>
        </div>
      `
          : ""
      }

      <div class="modal-footer">
        <button type="button" class="btn" id="inspectorEditBtn">${Icons.edit} Edit ${item.type}</button>
        ${
          item.type === "project" || item.type === "goal"
            ? `<button type="button" class="btn btn-primary" id="inspectorAddTaskBtn">+ Add Linked Task</button>`
            : ""
        }
      </div>
    `;

    document.getElementById("inspectorModal").classList.add("open");

    document.getElementById("closeInspectorBtn").addEventListener("click", () => this.closeInspectorModal());
    document.getElementById("inspectorEditBtn").addEventListener("click", () => {
      this.closeInspectorModal();
      this.openEditorModal(item.type, item);
    });

    document.getElementById("inspectorAddTaskBtn")?.addEventListener("click", () => {
      this.closeInspectorModal();
      this.openEditorModal("task", {
        projectId: item.type === "project" ? item.id : "",
        goalId: item.type === "goal" ? item.id : item.goalId || ""
      });
    });

    document.getElementById("addSubtaskForm")?.addEventListener("submit", e => {
      e.preventDefault();
      const input = document.getElementById("newSubtaskInput");
      if (input && input.value.trim()) {
        this.store.addSubtask(item.id, input.value);
        this.openInspectorModal(item.id);
        this.renderAll();
      }
    });

    container.querySelectorAll("[data-toggle-subtask]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.store.toggleSubtask(item.id, btn.dataset.toggleSubtask);
        this.openInspectorModal(item.id);
        this.renderAll();
      });
    });

    container.querySelectorAll("[data-delete-subtask]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.store.deleteSubtask(item.id, btn.dataset.deleteSubtask);
        this.openInspectorModal(item.id);
        this.renderAll();
      });
    });

    container.querySelectorAll("[data-jump-inspect], [data-inspect-id]").forEach(el => {
      el.addEventListener("click", e => {
        e.stopPropagation();
        const nextId = el.dataset.jumpInspect || el.dataset.inspectId;
        if (nextId) this.openInspectorModal(nextId);
      });
    });

    container.querySelectorAll("[data-complete-task]").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        this.store.toggleTaskCompletion(btn.dataset.completeTask);
        this.openInspectorModal(id);
        this.renderAll();
      });
    });
  }

  closeInspectorModal() {
    document.getElementById("inspectorModal").classList.remove("open");
  }

  openEditorModal(type = "task", existingItem = null) {
    this.editingType = type;
    const isEdit = Boolean(existingItem && existingItem.id);
    document.getElementById("editorModalTitle").textContent = isEdit
      ? `Edit ${type.charAt(0).toUpperCase() + type.slice(1)}`
      : "Capture Workspace Item";

    document.getElementById("itemIdInput").value = isEdit ? existingItem.id : "";
    document.getElementById("itemTitleInput").value = existingItem?.title || "";
    document.getElementById("itemDescInput").value = existingItem?.description || "";

    this.renderTypeSelectorChips(existingItem);
    this.renderDynamicTypeFields(this.editingType, existingItem || {});

    document.getElementById("editorModal").classList.add("open");
    document.getElementById("itemTitleInput").focus();
  }

  closeEditorModal() {
    document.getElementById("editorModal").classList.remove("open");
  }

  renderTypeSelectorChips(existingItem) {
    const types = ["task", "event", "routine", "project", "goal", "reference"];
    const grid = document.getElementById("typeSelectorGrid");
    grid.innerHTML = types
      .map(
        t => `
        <button type="button" class="type-chip ${this.editingType === t ? "active" : ""}" data-pick-type="${t}">
          ${t}
        </button>
      `
      )
      .join("");

    grid.querySelectorAll("[data-pick-type]").forEach(chip => {
      chip.addEventListener("click", () => {
        this.editingType = chip.dataset.pickType;
        this.renderTypeSelectorChips(existingItem);
        this.renderDynamicTypeFields(this.editingType, existingItem || {});
      });
    });
  }

  renderDynamicTypeFields(type, data = {}) {
    const container = document.getElementById("dynamicFieldsContainer");
    const projects = this.store.getByType("project");
    const goals = this.store.getByType("goal");

    const projectOptions = `<option value="">None</option>${projects
      .map(p => `<option value="${p.id}" ${data.projectId === p.id ? "selected" : ""}>${this.escapeHTML(p.title)}</option>`)
      .join("")}`;

    const goalOptions = `<option value="">None</option>${goals
      .map(g => `<option value="${g.id}" ${data.goalId === g.id ? "selected" : ""}>${this.escapeHTML(g.title)}</option>`)
      .join("")}`;

    if (type === "task") {
      container.innerHTML = `
        <div class="form-row-2">
          <div class="field-group">
            <label class="field-label">Planned Working Date</label>
            <input type="date" id="f_plannedDate" class="field-input" value="${data.plannedDate || ""}" />
          </div>
          <div class="field-group">
            <label class="field-label">Planned Time</label>
            <input type="time" id="f_plannedTime" class="field-input" value="${data.plannedTime || ""}" />
          </div>
        </div>
        <div class="form-row-2">
          <div class="field-group">
            <label class="field-label">Final Deadline</label>
            <input type="date" id="f_deadline" class="field-input" value="${data.deadline || ""}" />
          </div>
          <div class="field-group">
            <label class="field-label">Priority</label>
            <select id="f_priority" class="field-select">
              <option value="medium" ${data.priority === "medium" || !data.priority ? "selected" : ""}>Medium Priority</option>
              <option value="high" ${data.priority === "high" ? "selected" : ""}>High Priority</option>
              <option value="low" ${data.priority === "low" ? "selected" : ""}>Low Priority</option>
            </select>
          </div>
        </div>
        <div class="form-row-2">
          <div class="field-group">
            <label class="field-label">Completion State</label>
            <select id="f_status" class="field-select">
              <option value="open" ${data.status === "open" ? "selected" : ""}>Open</option>
              <option value="in_progress" ${data.status === "in_progress" ? "selected" : ""}>In Progress</option>
              <option value="deferred" ${data.status === "deferred" ? "selected" : ""}>Deferred</option>
              <option value="completed" ${data.status === "completed" ? "selected" : ""}>Completed</option>
            </select>
          </div>
          <div class="field-group">
            <label class="field-label">Recurrence Rule</label>
            <select id="f_recurrence" class="field-select">
              <option value="none" ${!data.recurrence || data.recurrence === "none" ? "selected" : ""}>One-time Task</option>
              <option value="daily" ${data.recurrence === "daily" ? "selected" : ""}>Daily</option>
              <option value="weekly" ${data.recurrence === "weekly" ? "selected" : ""}>Weekly</option>
              <option value="monthly" ${data.recurrence === "monthly" ? "selected" : ""}>Monthly</option>
            </select>
          </div>
        </div>
        <div class="form-row-2">
          <div class="field-group">
            <label class="field-label">Parent Project</label>
            <select id="f_projectId" class="field-select">${projectOptions}</select>
          </div>
          <div class="field-group">
            <label class="field-label">Related Goal</label>
            <select id="f_goalId" class="field-select">${goalOptions}</select>
          </div>
        </div>
      `;
    } else if (type === "event") {
      container.innerHTML = `
        <div class="form-row-2">
          <div class="field-group">
            <label class="field-label">Event Date *</label>
            <input type="date" id="f_startDate" class="field-input" value="${data.startDate || this.selectedDate}" />
          </div>
          <div class="field-group">
            <label class="field-label">Location / Meeting Link</label>
            <input type="text" id="f_location" class="field-input" placeholder="Room or URL" value="${this.escapeHTML(data.location || "")}" />
          </div>
        </div>
        <div class="form-row-2">
          <div class="field-group">
            <label class="field-label">Start Time</label>
            <input type="time" id="f_startTime" class="field-input" value="${data.startTime || "09:00"}" />
          </div>
          <div class="field-group">
            <label class="field-label">End Time</label>
            <input type="time" id="f_endTime" class="field-input" value="${data.endTime || "10:00"}" />
          </div>
        </div>
        <div class="form-row-2">
          <div class="field-group">
            <label class="field-label">Related Project</label>
            <select id="f_projectId" class="field-select">${projectOptions}</select>
          </div>
          <div class="field-group">
            <label class="field-label">Related Goal</label>
            <select id="f_goalId" class="field-select">${goalOptions}</select>
          </div>
        </div>
      `;
    } else if (type === "routine") {
      container.innerHTML = `
        <div class="form-row-2">
          <div class="field-group">
            <label class="field-label">Frequency</label>
            <select id="f_frequency" class="field-select">
              <option value="daily" ${data.frequency === "daily" ? "selected" : ""}>Every Day</option>
              <option value="weekdays" ${data.frequency === "weekdays" ? "selected" : ""}>Weekdays (Mon–Fri)</option>
              <option value="weekends" ${data.frequency === "weekends" ? "selected" : ""}>Weekends (Sat–Sun)</option>
              <option value="weekly" ${data.frequency === "weekly" ? "selected" : ""}>Weekly</option>
            </select>
          </div>
          <div class="field-group">
            <label class="field-label">Preferred Time</label>
            <input type="time" id="f_preferredTime" class="field-input" value="${data.preferredTime || "08:00"}" />
          </div>
        </div>
        <div class="field-group">
          <label class="field-label">Supporting Goal</label>
          <select id="f_goalId" class="field-select">${goalOptions}</select>
        </div>
      `;
    } else if (type === "project") {
      container.innerHTML = `
        <div class="form-row-2">
          <div class="field-group">
            <label class="field-label">Lifecycle Status</label>
            <select id="f_status" class="field-select">
              <option value="active" ${data.status === "active" || !data.status ? "selected" : ""}>Active</option>
              <option value="planned" ${data.status === "planned" ? "selected" : ""}>Planned</option>
              <option value="paused" ${data.status === "paused" ? "selected" : ""}>Paused</option>
              <option value="completed" ${data.status === "completed" ? "selected" : ""}>Completed</option>
            </select>
          </div>
          <div class="field-group">
            <label class="field-label">Target Completion Date</label>
            <input type="date" id="f_targetDate" class="field-input" value="${data.targetDate || ""}" />
          </div>
        </div>
        <div class="form-row-2">
          <div class="field-group">
            <label class="field-label">Manual Fallback Progress (%)</label>
            <input type="number" min="0" max="100" id="f_manualProgress" class="field-input" value="${data.manualProgress ?? 0}" />
          </div>
          <div class="field-group">
            <label class="field-label">Related Goal</label>
            <select id="f_goalId" class="field-select">${goalOptions}</select>
          </div>
        </div>
      `;
    } else if (type === "goal") {
      container.innerHTML = `
        <div class="form-row-2">
          <div class="field-group">
            <label class="field-label">Goal Status</label>
            <select id="f_status" class="field-select">
              <option value="active" ${data.status === "active" || !data.status ? "selected" : ""}>Active</option>
              <option value="planned" ${data.status === "planned" ? "selected" : ""}>Planned</option>
              <option value="achieved" ${data.status === "achieved" ? "selected" : ""}>Achieved</option>
              <option value="paused" ${data.status === "paused" ? "selected" : ""}>Paused</option>
            </select>
          </div>
          <div class="field-group">
            <label class="field-label">Target Date</label>
            <input type="date" id="f_targetDate" class="field-input" value="${data.targetDate || ""}" />
          </div>
        </div>
        <div class="field-group">
          <label class="field-label">Measurement Method (Qualitative or Metric)</label>
          <input type="text" id="f_measurementMethod" class="field-input" placeholder="e.g., Complete 12 modules or build daily habit" value="${this.escapeHTML(data.measurementMethod || "")}" />
        </div>
      `;
    } else if (type === "reference") {
      container.innerHTML = `
        <div class="form-row-2">
          <div class="field-group">
            <label class="field-label">URL / Source Link</label>
            <input type="url" id="f_url" class="field-input" placeholder="https://..." value="${this.escapeHTML(data.url || "")}" />
          </div>
          <div class="field-group">
            <label class="field-label">Tags (comma separated)</label>
            <input type="text" id="f_tags" class="field-input" placeholder="syllabus, notes, research" value="${this.escapeHTML(data.tags || "")}" />
          </div>
        </div>
        <div class="form-row-2">
          <div class="field-group">
            <label class="field-label">Related Project</label>
            <select id="f_projectId" class="field-select">${projectOptions}</select>
          </div>
          <div class="field-group">
            <label class="field-label">Related Goal</label>
            <select id="f_goalId" class="field-select">${goalOptions}</select>
          </div>
        </div>
      `;
    }
  }

  saveEditorForm() {
    const id = document.getElementById("itemIdInput").value;
    const type = this.editingType;
    const title = document.getElementById("itemTitleInput").value.trim();
    const description = document.getElementById("itemDescInput").value.trim();
    if (!title) return;

    const val = fieldId => {
      const el = document.getElementById(fieldId);
      return el ? el.value : "";
    };

    const payload = { id: id || undefined, type, title, description };

    if (type === "task") {
      payload.plannedDate = val("f_plannedDate");
      payload.plannedTime = val("f_plannedTime");
      payload.deadline = val("f_deadline");
      payload.priority = val("f_priority");
      payload.status = val("f_status");
      payload.recurrence = val("f_recurrence");
      payload.projectId = val("f_projectId");
      payload.goalId = val("f_goalId");
    } else if (type === "event") {
      payload.startDate = val("f_startDate");
      payload.startTime = val("f_startTime");
      payload.endTime = val("f_endTime");
      payload.location = val("f_location");
      payload.projectId = val("f_projectId");
      payload.goalId = val("f_goalId");
    } else if (type === "routine") {
      payload.frequency = val("f_frequency");
      payload.preferredTime = val("f_preferredTime");
      payload.goalId = val("f_goalId");
    } else if (type === "project") {
      payload.status = val("f_status");
      payload.targetDate = val("f_targetDate");
      payload.manualProgress = Number(val("f_manualProgress") || 0);
      payload.goalId = val("f_goalId");
    } else if (type === "goal") {
      payload.status = val("f_status");
      payload.targetDate = val("f_targetDate");
      payload.measurementMethod = val("f_measurementMethod");
    } else if (type === "reference") {
      payload.url = val("f_url");
      payload.tags = val("f_tags");
      payload.projectId = val("f_projectId");
      payload.goalId = val("f_goalId");
    }

    this.store.upsert(payload);
    this.closeEditorModal();
    this.showToast(`Saved ${type}: "${title}"`);
    this.renderAll();
  }

  escapeHTML(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.daylineApp = new DaylineApp();
  const captureHelpBtn = document.getElementById("captureHelpBtn");
const captureHelp = document.getElementById("captureHelp");
const captureHelpClose = document.getElementById("captureHelpClose");

function setCaptureHelpOpen(open) {
  captureHelp.hidden = !open;
  captureHelpBtn.setAttribute("aria-expanded", String(open));
}

captureHelpBtn.addEventListener("click", () => {
  setCaptureHelpOpen(captureHelp.hidden);
});

captureHelpClose.addEventListener("click", () => {
  setCaptureHelpOpen(false);
  captureHelpBtn.focus();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !captureHelp.hidden) {
    setCaptureHelpOpen(false);
    captureHelpBtn.focus();
  }
});
});
