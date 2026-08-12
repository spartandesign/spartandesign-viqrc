const units = [
  { n: "01", dates: "Aug 13-Sep 18", title: "Launch the Lab", weeks: "5 weeks", color: "yellow", summary: "Safety, inventories, team culture, baseline builds, and a shared reading of Level Up.", products: ["Safety + parts certification", "Team charter and role rotation", "Level Up rules jigsaw", "Baseline driving and scoring data"], checkpoint: "Progress I • Sep 18" },
  { n: "02", dates: "Sep 21-Oct 30", title: "Mechanisms That Score", weeks: "6 weeks", color: "blue", summary: "Iterate intakes, lifts, and structures against measurable Level Up constraints.", products: ["Three mechanism prototypes", "Decision matrix with evidence", "Legal competition robot v1", "Design review and notebook audit"], checkpoint: "Progress II • Oct 30" },
  { n: "03", dates: "Nov 2-Dec 18", title: "Drive, Code, Compete", weeks: "7 weeks", color: "coral", summary: "Build repeatable routes, autonomous routines, match communication, and event readiness.", products: ["Driver skills route + data", "Autonomous coding skills routine", "Mock tournament and interview", "Semester portfolio defense"], checkpoint: "Semester I • Dec 18" },
  { n: "04", dates: "Jan 5-Feb 12", title: "Rebuild From Evidence", weeks: "6 weeks", color: "mint", summary: "Use first-semester data to redesign for reliability, speed, and higher-value goals.", products: ["Failure analysis", "Robot v2 design proposal", "Controlled A/B tests", "Midyear skills benchmark"], checkpoint: "Progress IV • Feb 12" },
  { n: "05", dates: "Feb 22-Apr 16", title: "Peak Competition", weeks: "7 weeks", color: "violet", summary: "Practice under pressure, scout partners, polish notebooks, and perform at qualifying events.", products: ["Teamwork partner playbook", "Event-ready inspection packet", "Judge interview rehearsal", "Competition reflection"], checkpoint: "Progress V • Apr 16" },
  { n: "06", dates: "Apr 19-Jun 4", title: "Legacy & Showcase", weeks: "7 weeks", color: "yellow", summary: "Transfer expertise, run a public showcase, and leave the program stronger for next year.", products: ["Student-led mini clinics", "Final engineering portfolio", "Community showcase", "Next-season handoff guide"], checkpoint: "Semester II • Jun 4" },
];

const routines = [
  ["MONDAY", "Learn + launch", "All-period day • 47–52 min", "Direct instruction, teacher demo, safety, weekly target"],
  ["WEDNESDAY", "STEM Lab studio", "Even-period block • 80–81 min", "VEX IQ STEM Lab build, code, test, and notebook evidence"],
  ["FRIDAY", "Level Up competition lab", "Even-period block • 80–81 min", "Robot iteration, skills, strategy, scrimmage, and reflection"],
  ["EVERY CLASS", "Evidence + reset", "Final 10–15 minutes", "Notebook update, data, next step, charging, parts and field reset"],
];

const assessments = [
  ["Engineering process", "30%", "Notebook entries, sketches, iterations, evidence"],
  ["Technical performance", "25%", "Build quality, code, driving, reliability, skills growth"],
  ["Collaboration", "20%", "Role follow-through, communication, safety, stewardship"],
  ["Competition readiness", "15%", "Rules, inspection, scouting, interviews, match conduct"],
  ["Reflection + communication", "10%", "Design reviews, portfolios, demos, handoff"],
];

const studioSystems = [
  ["01", "Learn the pathway", "Discover a concept, practice it in a STEM Lab, then prove it through Level Up evidence."],
  ["02", "Work in role pairs", "Drivers, programmers, and strategists each use a lead and fully trained backup playbook."],
  ["03", "Capture every studio", "Record the target, change, evidence, decision, and next test before cleanup."],
  ["04", "Pass readiness gates", "Verify VIQRC size, motor, Drive Team, Loader, rules, notebook, skills, and packing checks."],
  ["05", "Defend the evidence", "At each grading period, curate the strongest notebook evidence and explain the next move."],
];

const resources = [
  ["VEX IQ STEM Labs", "https://education.vex.com/stemlabs/iq"],
  ["VEX IQ teacher resources + pacing guides", "https://education.vex.com/stemlabs/iq/teacher-resources"],
  ["Global Robotics & Science Foundation", "https://www.globalrobotics.org/"],
  ["Global Robotics VEX IQ team resources", "https://library.globalrobotics.org/hc/en-us/categories/51091266492436-Teams?sc=vex-iq"],
  ["Global Robotics notebook rubrics", "https://library.globalrobotics.org/hc/en-us/articles/51134310278804-Engineering-Notebook-Rubrics"],
  ["Current Level Up manual", "https://link.vex.com/docs/26-27/viqrc/game-manual"],
  ["Level Up overview + scoring", "https://www.vexrobotics.com/iq/competition"],
  ["Official manual version calendar", "https://www.vexrobotics.com/26-27-manuals"],
  ["Register teams + find official events", "https://events.vex.com/"],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Level Up Lab home"><span className="brandMark">L↑</span><span>LEVEL UP LAB</span></a>
        <nav aria-label="Primary navigation">
          <a href="#pathway">How it works</a><a href="#year">Year map</a><a href="#teams">Teams</a><a href="#manual">Manual v1.1</a><a href="#teacher">Teacher desk</a>
        </nav>
        <a className="pill small" href="./stauffer-viqrc-canvas.imscc" download>Canvas shell ↓</a>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow">2026–27 • MARY R. STAUFFER MIDDLE SCHOOL • MANUAL V1.1: AUG 6, 2026</div>
        <h1>Build boldly.<br/><em>Compete kindly.</em></h1>
        <p className="lede">A full-year competitive robotics elective built around VIQRC <strong>Level Up</strong>—where every prototype becomes evidence, every student owns the work, and every team leaves a legacy.</p>
        <div className="heroActions"><a className="pill" href="#year">Explore the year <span>→</span></a><a className="textLink" href="#week">See the weekly rhythm ↓</a></div>
        <div className="scoreRail" aria-label="Level Up scoring values">
          <div><b>01</b><span>point</span><small>Floor goal</small></div><div><b>03</b><span>points</span><small>L1 goal</small></div><div><b>06</b><span>points</span><small>L2 goal</small></div><div><b>12</b><span>points</span><small>L3 goal</small></div><div className="hot"><b>16</b><span>points</span><small>L4 goal</small></div>
        </div>
        <div className="heroNote"><span>60</span><small>second matches</small><i></i><span>1</span><small>bean bag max possession</small><i></i><span>2</span><small>robots per alliance</small></div>
      </section>

      <section className="intro">
        <p className="kicker">COURSE NORTH STAR</p>
        <div className="split"><h2>Not a build club.<br/>An <span>engineering studio.</span></h2><div><p>Students cycle through research, design, building, coding, testing, communication, and reflection. Competition gives the work a real audience; evidence makes the learning visible.</p><div className="principles"><span>Student-centered</span><span>Evidence before opinion</span><span>Reliable before flashy</span><span>Kindness under pressure</span></div></div></div>
      </section>

      <section className="pathway" id="pathway">
        <div className="sectionHead"><div><p className="kicker">FROM THE SPARTAN DESIGN PLAYBOOK</p><h2>A pathway students can follow.</h2></div><p>The Spartan program’s strongest habit is making expert practice visible. This VIQRC course keeps that structure while using shorter routines, clearer role pairing, and middle-school-sized evidence cycles.</p></div>
        <div className="stageRail"><article><b>DISCOVER</b><span>Monday</span><p>Learn a rule, mechanism, coding idea, or team routine.</p></article><i>→</i><article><b>PRACTICE</b><span>Wednesday</span><p>Build skill through a VEX IQ STEM Lab or controlled exercise.</p></article><i>→</i><article><b>PROVE</b><span>Friday</span><p>Apply it to Level Up, collect evidence, and choose the next test.</p></article></div>
        <div className="systemGrid">{studioSystems.map(([n,title,detail])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{detail}</p></div></article>)}</div>
      </section>

      <section className="year" id="year">
        <div className="sectionHead"><div><p className="kicker">THE 180-DAY ARC</p><h2>Six purposeful sprints</h2></div><p>Aligned to Downey Unified reporting periods. Event dates stay flexible so Ms. Lang can add local tournaments in Canvas without rebuilding the course.</p></div>
        <div className="unitGrid">{units.map((u) => <article className={`unit ${u.color}`} key={u.n}><div className="unitTop"><span>{u.n}</span><p>{u.dates}<br/><b>{u.weeks}</b></p></div><h3>{u.title}</h3><p>{u.summary}</p><ul>{u.products.map(p => <li key={p}>{p}</li>)}</ul><footer>{u.checkpoint}</footer></article>)}</div>
        <div className="calendarStrip"><b>NO-SCHOOL / TRANSITION WINDOWS</b><span>Sep 7</span><span>Oct 12</span><span>Nov 11 & 23–27</span><span>Dec 21–Jan 4</span><span>Feb 15–19</span><span>Mar 26–Apr 2</span><span>May 31</span></div>
      </section>

      <section className="week" id="week">
        <div className="sectionHead light"><div><p className="kicker">THE WEEKLY RHYTHM</p><h2>Learn Monday.<br/>Apply Wednesday.<br/>Compete Friday.</h2></div><p>Stauffer's all-period Monday provides a short 47–52 minute launch. Wednesday and Friday provide 80–81 minute even-period blocks for sustained engineering work. Every meeting ends with a clean field, charged batteries, labeled work, and one documented next step.</p></div>
        <div className="routineGrid">{routines.map(([day,title,time,detail],i)=><div className="routine" key={day}><span>{String(i+1).padStart(2,"0")}</span><div><b>{day}</b><h3>{title}</h3></div><div><b>{time}</b><p>{detail}</p></div></div>)}</div>
        <div className="blockCallout"><span>WED / FRI BLOCK FLOW</span><b>10</b><small>brief + safety</small><i>→</i><b>55</b><small>STEM Lab or Level Up work</small><i>→</i><b>15</b><small>evidence + reset</small></div>
      </section>

      <section className="teams" id="teams">
        <div className="sectionHead"><div><p className="kicker">TEAMS OF SIX</p><h2>Expertise moves.<br/>Ownership stays.</h2></div><p>Distribute the six or seven returning members across teams so experience is shared. Each specialty pair has a lead and a fully trained backup; returning status does not guarantee a lead role.</p></div>
        <div className="teamLayout"><div className="roles">
          <div><span>01</span><h3>Lead Driver</h3><p>Controller routines, Driving Skills, match communication</p></div><div><span>02</span><h3>Backup Driver</h3><p>Full driver cross-training and competition readiness</p></div><div><span>03</span><h3>Lead Programmer</h3><p>Code integration, sensors, versions, test plans</p></div><div><span>04</span><h3>Backup Programmer</h3><p>Independent debugging and Autonomous Coding Skills</p></div><div><span>05</span><h3>Lead Strategist</h3><p>Rules, scouting, Teamwork partner plans, post-match review</p></div><div><span>06</span><h3>Backup Strategist</h3><p>Rules verification, evidence review, event continuity</p></div>
        </div><aside><b>LEAD + BACKUP PAIRS</b><h3>Backup means fully trained.</h3><p>All six students share construction, inspection, testing, cleanup, and engineering-notebook evidence. Leads coordinate and teach; backups must be able to assume the same core work.</p><hr/><p><strong>Returning members:</strong> distribute experience across teams and use role-readiness evidence—not seniority—to assign leads.</p></aside></div>
      </section>

      <section className="game" id="manual">
        <div className="gameTitle"><p className="kicker">2026–27 GAME LENS</p><h2>Level Up rewards<br/><span>smart tradeoffs.</span></h2></div>
        <div className="tradeoffs"><article><b>HEIGHT</b><p>Higher goals pay more—but demand stability, alignment, and cycle time.</p></article><article><b>ROUTE</b><p>Travel the long path or engineer a robot that fits through narrow shortcuts.</p></article><article><b>RELIABILITY</b><p>One bean bag at a time turns every jam, drop, and recovery into useful data.</p></article><article><b>PARTNERSHIP</b><p>Two robots share a 60-second score. Coordinate space, colors, loads, and priorities.</p></article></div>
        <div className="manualGrid"><article><b>11 × 20 × 15</b><span>inch inspected start size • &lt;R3&gt;</span></article><article><b>6 MAX</b><span>VEX IQ Smart Motors • &lt;R9&gt;</span></article><article><b>DRIVER 1 + 2</b><span>switch at 0:35–0:25 • &lt;GG11&gt;</span></article><article><b>LOADER</b><span>matching Load Zone procedure • &lt;SG7&gt;</span></article></div>
        <p className="manualFine"><strong>Scoring colors:</strong> Floor Goal and Levels 1–3 accept yellow or matching-color Bean Bags; Level 4 accepts yellow only. Teamwork qualification ranking uses average scores and events conclude with Finals Matches. Verified against Level Up Version 1.1.</p>
        <p className="updateNote"><strong>Rule-update habit:</strong> open the current manual on Aug 13, Sep 10, Oct 15, Dec 10, Feb 4, and Apr 1. Teams log changes and test whether any design or strategy is affected.</p>
      </section>

      <section className="assessment" id="assessment">
        <div className="sectionHead"><div><p className="kicker">GRADING THAT VALUES GROWTH</p><h2>Evidence beats<br/>trophies.</h2></div><p>Event placement never determines a grade. Students are assessed on the quality of their process, contribution, technical growth, and communication.</p></div>
        <div className="assessmentTable">{assessments.map(([name,pct,evidence])=><div key={name}><b>{pct}</b><h3>{name}</h3><p>{evidence}</p></div>)}</div>
        <div className="gradingDates"><b>GRADE WINDOWS</b><span>Sep 10–18</span><span>Oct 22–30</span><span>Dec 10–18</span><span>Feb 4–12</span><span>Apr 8–16</span><span>May 27–Jun 4</span></div>
      </section>

      <section className="teacher" id="teacher">
        <div><p className="kicker">MS. LANG’S TEACHER DESK</p><h2>Ready to run.<br/>Easy to adapt.</h2><p>The complete implementation kit combines a step-by-step launch guide, Canvas shell, six-person engineering notebook, family documents, team roster, curriculum audit, official links, and local calendar references.</p><div className="heroActions"><a className="pill dark" href="./Ms_Lang_VIQRC_Implementation_Kit.zip" download>Complete implementation kit ↓</a><a className="textLink darkText" href="./START_HERE_Ms_Lang_VIQRC_Implementation_Guide.pdf" target="_blank" rel="noreferrer">Implementation guide ↗</a></div><div className="familyDownloads"><a href="./stauffer-viqrc-canvas.imscc" download>Canvas .imscc ↓</a><a href="./VIQRC_Level_Up_Engineering_Notebook_2026-27_Six_Person_Teams.pptx" download>Engineering notebook ↓</a><a href="./Stauffer_VIQRC_Family_Syllabus_2026-27.pdf" download>Family syllabus PDF ↓</a><a href="./Spartan_Design_VIQRC_Handbook_2026-27.pdf" download>VIQRC handbook PDF ↓</a><a href="./team-roster-template.csv" download>Team roster template ↓</a></div></div>
        <aside><b>FIRST 48 HOURS</b><ol><li>Import the `.imscc` into a blank Canvas course.</li><li>Set course start/end dates and publish “Start Here.”</li><li>Assign teams after the skills + collaboration baseline.</li><li>Add confirmed events from events.vex.com to the calendar.</li><li>Confirm the elective period, then adjust due dates in bulk.</li></ol></aside>
      </section>

      <section className="resources"><p className="kicker">LIVE OFFICIAL SOURCES</p><h2>Rules change. Links stay useful.</h2><div>{resources.map(([label,url])=><a href={url} target="_blank" rel="noreferrer" key={label}><span>{label}</span><b>↗</b></a>)}</div><p className="fine">Use the current official manual and Q&amp;A as the authority. Curriculum scoring examples are instructional snapshots, not replacements for current rules.</p></section>
      <footer className="footer"><div className="brand"><span className="brandMark">L↑</span><span>LEVEL UP LAB</span></div><p>Prepared for Ms. Lang • Mary R. Stauffer Middle School • 2026–27</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
