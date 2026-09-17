/* Mobile navigation toggle */
(function () {
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
})();

/* Simple i18n for common UI strings across pages */
(function () {
  var translations = {
    en: {
      'meta.title': 'Managed AI Integration & Custom Business Automation | ProcessBoost',
      'meta.description': 'ProcessBoost combines proven AI and software services with custom integrations, dashboards and automation built around your existing systems. We manage the technology, train your team and keep important decisions under human control.',
      'services.meta.title': 'AI Tool Selection, Automation & Integration Services | ProcessBoost',
      'services.meta.description': 'ProcessBoost helps you select and configure AI tools, automate workflows, integrate existing software, build missing custom modules and train teams — with human control kept in place.',
      'contact.meta.title': 'Contact ProcessBoost | Discuss Your Workflow',
      'contact.meta.description': 'Tell ProcessBoost which workflow still requires too much manual work, which software you already use and where information is delayed or re-entered. We help you find the right starting point.',
      'nav.services': 'Services',
      'nav.solutions': 'Solutions',
      'nav.how': 'How It Works',
      'nav.industries': 'Industries',
      'nav.contact': 'Contact',
      'nav.toggle': 'Open menu',
      'cta.consult': 'Book a Free Consultation',
      'cta.automate': 'See How We Can Improve Your Workflow',
      'cta.discuss': 'Discuss Your Workflow',
      'link.learnMore': 'Learn more →',
      'footer.tagline': 'Connect, manage and extend the technology your business already relies on.',
      'footer.copy': '© <span id="year"></span> ProcessBoost. All rights reserved.',
      'hero.h1': 'One Tailored Workflow Across the Tools You Already Use',
      'hero.lead': 'We combine proven AI and software services with custom integrations, dashboards and automation built around the way your company actually works. Your existing systems stay in place while ProcessBoost connects, manages and improves the work between them — with human approval wherever it matters.',
      'hero.benefits': 'One managed solution · Connected systems · Custom workflows · Clear oversight · Human control',
      'hero.trust': 'Start with one process that still depends on emails, PDFs, spreadsheets, repeated data entry or manual follow-ups.',
      'pos.title': 'Use What Already Works. Build Only What Is Missing.',
      'pos.lead': 'Most companies already use industry-specific software. We do not replace reliable systems simply to sell another platform. We first study your existing tools and the way your team actually works.',
      'pos.body': 'Where possible, we use proven tools and secure APIs behind the scenes. We configure them for your business, connect them to your existing systems and bring the workflow together in one tailored solution. Where the available technology cannot cover a requirement, we build the missing integration, dashboard or internal tool.',
      'pos.highlight': 'Your company does not have to adapt to another rigid platform. We select, connect and manage the technology around your processes, requirements and business goals.',
      'svc.section': 'Services',
      'svc.intro': 'AI consulting, tool setup, integration, automation, training and custom development — only where it creates real operational value.',
      'svc1.title': 'Managed AI Solutions',
      'svc1.p': 'We select and configure suitable AI and software services, integrate them into your workflow and manage the technical setup around your requirements.',
      'svc1.long': 'We assess your operational needs, recommend suitable AI and software tools, configure them for your real workflows and help your team adopt them with clear responsibilities. The goal is practical use — not collecting unused licenses.',
      'svc2.title': 'Workflow Automation',
      'svc2.p': 'We automate repetitive processes, approvals, reminders, data transfers and other time-consuming operational tasks.',
      'svc2.long': 'We map the handoffs that create delays and repeated work, then automate defined steps such as data transfers, reminders, status updates and approvals. Routine work can run more reliably while exceptions stay visible to your team.',
      'svc3.title': 'API & System Integrations',
      'svc3.p': 'We connect your existing software, email, forms, calendars, databases and communication platforms through secure APIs and controlled data flows.',
      'svc3.long': 'We connect the software you already rely on — including email, forms, calendars, databases and communication platforms — so information moves between systems without constant re-entry. Existing tools stay in place where they already work well.',
      'svc4.title': 'Custom Dashboards & Internal Tools',
      'svc4.p': 'When the existing software does not provide the right interface or functionality, we build the missing dashboard, portal, module or internal application.',
      'svc4.long': 'When standard software cannot cover a company-specific requirement, we develop the missing piece: a module, dashboard, portal or internal application. Custom development is used selectively — only where configuration and integration are not enough.',
      'svc5.title': 'Documents, Data & Reporting',
      'svc5.p': 'We process emails, PDFs and documents, organize information, generate reports and keep business data accurate and accessible.',
      'svc5.long': 'We help you process emails, PDFs and other documents, structure the extracted information and create reports that keep business data accurate and accessible. This reduces searching, copying and inconsistent records across teams.',
      'svc6.title': 'Training, Support & Continuous Improvement',
      'svc6.p': 'We train your employees, monitor the implemented solution, provide ongoing support and improve the workflow as your requirements change.',
      'svc6.long': 'We train employees to use the selected tools and automated workflows safely and effectively. Clear roles, approval rules and practical guidance make adoption easier and keep important decisions under human control.',
      'flow.title': 'From Manual Handoffs to One Connected Workflow',
      'flow.intro': 'A practical example of how ProcessBoost improves the work between your existing systems.',
      'flow.s1.title': 'Information Arrives',
      'flow.s1.p': 'Information arrives from email, forms, PDFs, messages or your existing systems and starts the workflow.',
      'flow.s2.title': 'Data Is Prepared',
      'flow.s2.p': 'The relevant details are extracted, organized and checked so the next step can continue without confusion.',
      'flow.s3.title': 'Systems and People Are Connected',
      'flow.s3.p': 'ProcessBoost coordinates the handoff to the right software, employee or department — without switching between disconnected tools by hand.',
      'flow.s4.title': 'Approvals and Exceptions Stay Visible',
      'flow.s4.p': 'Approvals, errors and exceptions stay visible, while important decisions remain with your team.',
      'ctrl.title': 'Automation That Supports Your Team — Not a Black Box',
      'ctrl.lead': 'ProcessBoost automates clearly defined work while your company decides what may run automatically, what requires approval and when an employee must take over.',
      'ctrl.can.title': 'The System Can',
      'ctrl.can.1': 'Extract and organize information',
      'ctrl.can.2': 'Transfer data between existing tools',
      'ctrl.can.3': 'Prepare documents and reports',
      'ctrl.can.4': 'Send reminders and status updates',
      'ctrl.can.5': 'Complete approved routine actions',
      'ctrl.can.6': 'Flag exceptions and missing information',
      'ctrl.you.title': 'Your Team Controls',
      'ctrl.you.1': 'Permissions, external system access and operating limits',
      'ctrl.you.2': 'Approval rules for important actions',
      'ctrl.you.3': 'Employee roles and responsibilities',
      'ctrl.you.4': 'Activity histories and audit trails',
      'ctrl.you.5': 'Pause and override controls',
      'ctrl.you.6': 'Final decisions and exceptional cases',
      'ctrl.note': 'Every automation is designed with clear responsibilities, human approval where needed and transparent activity history.',
      'how.title': 'How It Works',
      'how.s1.title': 'We Analyze Your Workflow and Tools',
      'how.s1.p': 'We examine the process, the people involved and the software your company already uses.',
      'how.s2.title': 'We Identify the Real Gap',
      'how.s2.p': 'We find the manual handoffs, repeated work, delays and errors that create the greatest operational cost.',
      'how.s3.title': 'We Choose the Best Approach',
      'how.s3.p': 'We determine whether an existing tool should be configured, several systems should be connected or a custom solution is required.',
      'how.s4.title': 'We Build, Connect and Test',
      'how.s4.p': 'We implement the solution and test it with realistic workflows, approvals and exception cases.',
      'how.s5.title': 'We Operate, Train and Improve',
      'how.s5.p': 'We train your team, monitor the solution, provide ongoing support and improve the workflow as your requirements and systems change.',
      'sol.title': 'Solutions That Match the Actual Requirement',
      'sol.intro': 'These are possible engagement scopes — not pre-built modules or fixed packages.',
      'sol.1.title': 'Configure an Existing Tool',
      'sol.1.p': 'Select and configure an existing AI or software solution and train the team to use it effectively.',
      'sol.2.title': 'Connect and Automate a Workflow',
      'sol.2.p': 'Connect existing systems through APIs and automated workflows so information moves without repeated manual work.',
      'sol.3.title': 'Build What Is Missing',
      'sol.3.p': 'Develop the missing integration, dashboard, portal or internal application and combine it with proven services operating securely in the background.',
      'ind.title': 'Businesses That Benefit Most',
      'ind.intro': 'ProcessBoost is best suited to growing companies with recurring workflows, several employees, multiple software systems and important information still handled through email, PDFs or spreadsheets.',
      'ind.1': 'Property Management',
      'ind.2': 'Logistics, Freight Brokerage & 3PL',
      'ind.3': 'Staffing & Recruitment',
      'ind.4': 'Wholesale & Distribution',
      'ind.5': 'Multi-Location Service Operations',
      'ind.6': 'Professional Services',
      'ind.more': 'The industry is only the starting point. The decisive factor is whether manual work, disconnected systems or company-specific processes are limiting efficiency and growth.',
      'out.title': 'What Better-Connected Workflows Can Change',
      'out.intro': 'The exact result depends on the process, but the goal is always practical improvement that employees can see in their daily work.',
      'out.1.title': 'Less Repetitive Administration',
      'out.1.p': 'Information is captured once, prepared automatically and transferred to the correct system without repeated copying and manual follow-up.',
      'out.2.title': 'Clearer Operational Control',
      'out.2.p': 'Employees can see the current status, required approvals, missing information and exceptional cases from one controlled workflow.',
      'out.3.title': 'Faster Response and Processing',
      'out.3.p': 'Routine work moves forward automatically while important decisions and unusual cases are sent to the right employee.',
      'rev.title': 'What Our Clients Say',
      'rev.intro': 'Practical feedback from businesses that automated real workflows with ProcessBoost.',
      'rev.1.q': '“ProcessBoost helped us simplify several time-consuming administrative processes. Our team now spends less time on repetitive tasks and has a much clearer overview of daily operations. The solution was built around the way our business actually works.”',
      'rev.1.name': 'Jason, Operations Manager',
      'rev.1.role': 'Recruitment Agency',
      'rev.2.q': '“We needed more than another standard software tool. ProcessBoost created a customized system that connects our information and automates important steps while keeping our team in control. The entire process was clear, practical, and professional.”',
      'rev.2.name': 'Richard, Managing Director',
      'rev.2.role': 'Property Management Company',
      'rev.3.q': '“The new automation has made our work faster and more organized. Customer inquiries and internal information can now be processed without the constant manual follow-up we needed before. It has made a noticeable difference to our everyday workload.”',
      'rev.3.name': 'William, Business Owner',
      'rev.3.role': 'Logistics Company',
      'final.title': 'Show Us the Work That Still Happens Outside Your Main Software',
      'final.body': 'If your team still relies on emails, PDFs, spreadsheets, repeated data entry or manual follow-ups, we can connect the right technology behind one tailored and manageable workflow.',
      'services.h1': 'Our Services',
      'services.tag': 'We start with the tools and processes you already use — then configure, connect, train or build only what is missing.',
      'services.page.intro': 'AI consulting, implementation, integration, automation, employee training and custom development with clear human control.',
      'solutions.h1': 'Solutions by Scope',
      'solutions.tag': 'Choose the engagement level that matches the actual requirement — not a fixed package.',
      'industries.h1': 'Industries',
      'industries.tag': 'Growing companies with recurring workflows and multiple systems benefit most.',
      'contact.h1': 'Let’s Find the Right Starting Point',
      'contact.tag': 'Tell us which process still requires too much manual work, which software your company already uses and where information is repeatedly transferred, delayed or lost.',
      'contact.intro.title': 'Hi, I’m Ralf.',
      'contact.intro.body': 'I help companies select, configure, connect and extend AI and software tools. When standard solutions are not enough, we build the missing custom workflow, integration or internal system — always with clear human control.',
      'contact.photo.alt': 'Ralf — founder of ProcessBoost',
      'contact.prepare.title': 'What to Prepare',
      'contact.prepare.p': 'Share your company, industry, existing software and the workflow you would like to improve.',
      'contact.prepare.1': 'The process that still creates the most manual work',
      'contact.prepare.2': 'The software tools your team already uses',
      'contact.prepare.3': 'Where information is re-entered, delayed or lost',
      'contact.next.title': 'Next Step',
      'contact.next.p': 'Bring these details to your consultation so we can identify whether configuration, integration, training or a custom module is the best starting point.',
      'contact.next.note': 'Direct contact channels will be provided once business contact details are configured for this site.'
    },
    de: {
      'meta.title': 'Gemanagte KI-Integration & individuelle Geschäftsautomatisierung | ProcessBoost',
      'meta.description': 'ProcessBoost verbindet bewährte KI- und Softwareservices mit individuellen Integrationen, Dashboards und Automatisierung rund um Ihre bestehenden Systeme. Wir managen die Technik, schulen Ihr Team und halten wichtige Entscheidungen unter menschlicher Kontrolle.',
      'services.meta.title': 'KI-Toolauswahl, Automatisierung & Integration | ProcessBoost',
      'services.meta.description': 'ProcessBoost unterstützt Sie bei der Auswahl und Konfiguration von KI-Tools, der Automatisierung von Workflows, der Integration bestehender Software, fehlenden Custom-Modulen und der Schulung Ihrer Teams — mit klarer menschlicher Kontrolle.',
      'contact.meta.title': 'Kontakt ProcessBoost | Workflow besprechen',
      'contact.meta.description': 'Sagen Sie ProcessBoost, welcher Ablauf noch zu viel Handarbeit braucht, welche Software Sie bereits nutzen und wo Informationen verzögert oder erneut erfasst werden. Wir helfen Ihnen, den richtigen Einstieg zu finden.',
      'nav.services': 'Leistungen',
      'nav.solutions': 'Lösungen',
      'nav.how': 'So funktioniert’s',
      'nav.industries': 'Branchen',
      'nav.contact': 'Kontakt',
      'nav.toggle': 'Menü öffnen',
      'cta.consult': 'Kostenlose Beratung buchen',
      'cta.automate': 'So verbessern wir Ihren Workflow',
      'cta.discuss': 'Workflow besprechen',
      'link.learnMore': 'Mehr erfahren →',
      'footer.tagline': 'Verbinden, managen und erweitern Sie die Technologie, auf die Ihr Unternehmen bereits setzt.',
      'footer.copy': '© <span id="year"></span> ProcessBoost. Alle Rechte vorbehalten.',
      'hero.h1': 'Ein maßgeschneiderter Workflow über die Tools, die Sie bereits nutzen',
      'hero.lead': 'Wir verbinden bewährte KI- und Softwareservices mit individuellen Integrationen, Dashboards und Automatisierung — angepasst an die reale Arbeitsweise Ihres Unternehmens. Ihre bestehenden Systeme bleiben, während ProcessBoost die Arbeit dazwischen verbindet, managt und verbessert — mit menschlicher Freigabe, wo es zählt.',
      'hero.benefits': 'Eine gemanagte Lösung · Verbundene Systeme · Individuelle Workflows · Klare Übersicht · Menschliche Kontrolle',
      'hero.trust': 'Starten Sie mit einem Prozess, der noch von E-Mails, PDFs, Tabellen, wiederholter Dateneingabe oder manueller Nachverfolgung abhängt.',
      'pos.title': 'Nutzen, was bereits funktioniert. Bauen Sie nur, was fehlt.',
      'pos.lead': 'Die meisten Unternehmen nutzen bereits branchenspezifische Software. Wir ersetzen zuverlässige Systeme nicht einfach, um eine weitere Plattform zu verkaufen. Zuerst analysieren wir Ihre vorhandenen Tools und die reale Arbeitsweise Ihres Teams.',
      'pos.body': 'Wo möglich, nutzen wir bewährte Tools und sichere APIs im Hintergrund. Wir konfigurieren sie für Ihr Geschäft, verbinden sie mit Ihren bestehenden Systemen und führen den Workflow in einer maßgeschneiderten Lösung zusammen. Wo die verfügbare Technologie eine Anforderung nicht abdeckt, bauen wir die fehlende Integration, das Dashboard oder das interne Tool.',
      'pos.highlight': 'Ihr Unternehmen muss sich nicht an eine weitere starre Plattform anpassen. Wir wählen, verbinden und managen die Technologie rund um Ihre Prozesse, Anforderungen und Geschäftsziele.',
      'svc.section': 'Leistungen',
      'svc.intro': 'KI-Beratung, Tool-Setup, Integration, Automatisierung, Schulung und individuelle Entwicklung — nur dort, wo echter operativer Nutzen entsteht.',
      'svc1.title': 'Gemanagte KI-Lösungen',
      'svc1.p': 'Wir wählen passende KI- und Softwareservices aus, konfigurieren sie, integrieren sie in Ihren Workflow und managen die technische Einrichtung nach Ihren Anforderungen.',
      'svc1.long': 'Wir bewerten Ihren operativen Bedarf, empfehlen geeignete KI- und Software-Tools, konfigurieren sie für Ihre realen Abläufe und unterstützen die Einführung mit klaren Verantwortlichkeiten. Ziel ist praktischer Nutzen — nicht ungenutzte Lizenzen.',
      'svc2.title': 'Workflow-Automatisierung',
      'svc2.p': 'Wir automatisieren wiederkehrende Prozesse, Freigaben, Erinnerungen, Datenübertragungen und andere zeitintensive Betriebsaufgaben.',
      'svc2.long': 'Wir kartieren Übergaben, die Verzögerungen und Doppelarbeit erzeugen, und automatisieren definierte Schritte wie Datenübertragung, Erinnerungen, Status-Updates und Freigaben. Routinearbeit läuft zuverlässiger, Ausnahmen bleiben für Ihr Team sichtbar.',
      'svc3.title': 'API- & Systemintegrationen',
      'svc3.p': 'Wir verbinden Ihre vorhandene Software, E-Mail, Formulare, Kalender, Datenbanken und Kommunikationsplattformen über sichere APIs und kontrollierte Datenflüsse.',
      'svc3.long': 'Wir verbinden die Software, auf die Sie bereits setzen — inklusive E-Mail, Formulare, Kalender, Datenbanken und Kommunikationsplattformen — damit Informationen ohne ständiges erneutes Erfassen zwischen Systemen wandern. Bewährte Tools bleiben dort, wo sie funktionieren.',
      'svc4.title': 'Individuelle Dashboards & interne Tools',
      'svc4.p': 'Wenn die vorhandene Software die passende Oberfläche oder Funktion nicht bietet, bauen wir das fehlende Dashboard, Portal, Modul oder die interne Anwendung.',
      'svc4.long': 'Wenn Standardsoftware eine unternehmensspezifische Anforderung nicht abdeckt, entwickeln wir das fehlende Stück: Modul, Dashboard, Portal oder interne Anwendung. Individuelle Entwicklung setzen wir gezielt ein — nur dort, wo Konfiguration und Integration nicht ausreichen.',
      'svc5.title': 'Dokumente, Daten & Reporting',
      'svc5.p': 'Wir verarbeiten E-Mails, PDFs und Dokumente, strukturieren Informationen, erstellen Reports und halten Geschäftsdaten aktuell und zugänglich.',
      'svc5.long': 'Wir helfen Ihnen, E-Mails, PDFs und weitere Dokumente zu verarbeiten, die extrahierten Informationen zu strukturieren und Reports zu erstellen, die Geschäftsdaten aktuell und zugänglich halten. Das reduziert Suchen, Kopieren und inkonsistente Datensätze.',
      'svc6.title': 'Schulung, Support & kontinuierliche Verbesserung',
      'svc6.p': 'Wir schulen Ihre Mitarbeitenden, überwachen die umgesetzte Lösung, bieten laufenden Support und verbessern den Workflow, wenn sich Ihre Anforderungen ändern.',
      'svc6.long': 'Wir schulen Mitarbeitende im sicheren und wirksamen Einsatz der ausgewählten Tools und automatisierten Workflows. Klare Rollen, Freigaberegeln und praktische Anleitung erleichtern die Einführung und halten wichtige Entscheidungen unter menschlicher Kontrolle.',
      'flow.title': 'Von manuellen Übergaben zu einem verbundenen Workflow',
      'flow.intro': 'Ein praktisches Beispiel, wie ProcessBoost die Zusammenarbeit zwischen Ihren bestehenden Systemen verbessert.',
      'flow.s1.title': 'Information trifft ein',
      'flow.s1.p': 'Informationen kommen per E-Mail, Formular, PDF, Nachricht oder aus Ihren bestehenden Systemen und starten den Workflow.',
      'flow.s2.title': 'Daten werden vorbereitet',
      'flow.s2.p': 'Die relevanten Angaben werden extrahiert, geordnet und geprüft, damit der nächste Schritt ohne Unklarheiten weiterlaufen kann.',
      'flow.s3.title': 'Systeme und Personen werden verbunden',
      'flow.s3.p': 'ProcessBoost koordiniert die Übergabe an die richtige Software, Person oder Abteilung — ohne manuelles Wechseln zwischen getrennten Tools.',
      'flow.s4.title': 'Freigaben und Ausnahmen bleiben sichtbar',
      'flow.s4.p': 'Freigaben, Fehler und Ausnahmen bleiben sichtbar, während wichtige Entscheidungen bei Ihrem Team liegen.',
      'ctrl.title': 'Automatisierung, die Ihr Team unterstützt — keine Blackbox',
      'ctrl.lead': 'ProcessBoost automatisiert klar definierte Arbeit, während Ihr Unternehmen entscheidet, was automatisch laufen darf, was freigegeben werden muss und wann eine Mitarbeiterin oder ein Mitarbeiter übernimmt.',
      'ctrl.can.title': 'Das System kann',
      'ctrl.can.1': 'Informationen extrahieren und ordnen',
      'ctrl.can.2': 'Daten zwischen vorhandenen Tools übertragen',
      'ctrl.can.3': 'Dokumente und Reports vorbereiten',
      'ctrl.can.4': 'Erinnerungen und Status-Updates senden',
      'ctrl.can.5': 'Freigegebene Routineaktionen ausführen',
      'ctrl.can.6': 'Ausnahmen und fehlende Angaben markieren',
      'ctrl.you.title': 'Ihr Team steuert',
      'ctrl.you.1': 'Berechtigungen, Zugriff auf externe Systeme und Betriebsgrenzen',
      'ctrl.you.2': 'Freigaberegeln für wichtige Aktionen',
      'ctrl.you.3': 'Mitarbeiterrollen und Verantwortlichkeiten',
      'ctrl.you.4': 'Aktivitätsverläufe und Audit-Trails',
      'ctrl.you.5': 'Pause- und Override-Steuerung',
      'ctrl.you.6': 'Endgültige Entscheidungen und Ausnahmefälle',
      'ctrl.note': 'Jede Automatisierung wird mit klaren Verantwortlichkeiten, menschlicher Freigabe bei Bedarf und transparenter Aktivitätsgeschichte gestaltet.',
      'how.title': 'So funktioniert’s',
      'how.s1.title': 'Wir analysieren Workflow und Tools',
      'how.s1.p': 'Wir prüfen den Prozess, die beteiligten Personen und die Software, die Ihr Unternehmen bereits nutzt.',
      'how.s2.title': 'Wir finden die echte Lücke',
      'how.s2.p': 'Wir identifizieren manuelle Übergaben, Doppelarbeit, Verzögerungen und Fehler mit den höchsten operativen Kosten.',
      'how.s3.title': 'Wir wählen den besten Ansatz',
      'how.s3.p': 'Wir klären, ob ein bestehendes Tool konfiguriert, mehrere Systeme verbunden oder eine individuelle Lösung nötig ist.',
      'how.s4.title': 'Wir bauen, verbinden und testen',
      'how.s4.p': 'Wir setzen die Lösung um und testen sie mit realistischen Workflows, Freigaben und Ausnahmefällen.',
      'how.s5.title': 'Wir betreiben, schulen und verbessern',
      'how.s5.p': 'Wir schulen Ihr Team, überwachen die Lösung, bieten laufenden Support und verbessern den Workflow, wenn sich Anforderungen und Systeme ändern.',
      'sol.title': 'Lösungen, die zur tatsächlichen Anforderung passen',
      'sol.intro': 'Das sind mögliche Projektumfänge — keine vorgefertigten Module oder festen Pakete.',
      'sol.1.title': 'Ein bestehendes Tool konfigurieren',
      'sol.1.p': 'Eine vorhandene KI- oder Softwarelösung auswählen und konfigurieren sowie das Team wirksam schulen.',
      'sol.2.title': 'Einen Workflow verbinden und automatisieren',
      'sol.2.p': 'Bestehende Systeme über APIs und automatisierte Workflows verbinden, damit Informationen ohne wiederholte Handarbeit fließen.',
      'sol.3.title': 'Bauen, was fehlt',
      'sol.3.p': 'Die fehlende Integration, das Dashboard, Portal oder die interne Anwendung entwickeln und mit bewährten Services kombinieren, die sicher im Hintergrund laufen.',
      'ind.title': 'Unternehmen, die am meisten profitieren',
      'ind.intro': 'ProcessBoost eignet sich besonders für wachsende Unternehmen mit wiederkehrenden Abläufen, mehreren Mitarbeitenden, mehreren Softwaresystemen und wichtigen Informationen, die noch über E-Mail, PDFs oder Tabellen laufen.',
      'ind.1': 'Immobilienverwaltung',
      'ind.2': 'Logistik, Freight Brokerage & 3PL',
      'ind.3': 'Personalvermittlung & Recruitment',
      'ind.4': 'Großhandel & Distribution',
      'ind.5': 'Servicebetriebe mit mehreren Standorten',
      'ind.6': 'Professionelle Dienstleistungen',
      'ind.more': 'Die Branche ist nur der Ausgangspunkt. Entscheidend ist, ob Handarbeit, getrennte Systeme oder unternehmensspezifische Prozesse Effizienz und Wachstum begrenzen.',
      'out.title': 'Was besser vernetzte Abläufe bewirken können',
      'out.intro': 'Das genaue Ergebnis hängt vom Prozess ab. Ziel ist immer eine praktische Verbesserung, die Mitarbeitende im Alltag spüren.',
      'out.1.title': 'Weniger repetitive Verwaltung',
      'out.1.p': 'Informationen werden einmal erfasst, automatisch aufbereitet und ins richtige System übertragen — ohne ständiges Kopieren und manuelle Nachverfolgung.',
      'out.2.title': 'Klarere operative Kontrolle',
      'out.2.p': 'Mitarbeitende sehen Status, nötige Freigaben, fehlende Angaben und Ausnahmefälle in einem kontrollierten Workflow.',
      'out.3.title': 'Schnellere Reaktion und Bearbeitung',
      'out.3.p': 'Routinearbeit läuft automatisch weiter, während wichtige Entscheidungen und ungewöhnliche Fälle an die richtige Person gehen.',
      'rev.title': 'Das sagen unsere Kunden',
      'rev.intro': 'Praktisches Feedback von Unternehmen, die mit ProcessBoost echte Abläufe automatisiert haben.',
      'rev.1.q': '„ProcessBoost hat mehrere zeitaufwendige Abläufe in unserem Unternehmen deutlich vereinfacht. Unser Team verbringt jetzt weniger Zeit mit wiederkehrenden Aufgaben und hat eine bessere Übersicht über die täglichen Prozesse. Die Lösung wurde genau an unsere Arbeitsweise angepasst.“',
      'rev.1.name': 'Herbert, Geschäftsführer',
      'rev.1.role': 'Hausverwaltung',
      'rev.2.q': '„Wir wollten keine weitere Standardsoftware, an die wir unsere Abläufe anpassen müssen. ProcessBoost hat ein individuelles System entwickelt, das wichtige Arbeitsschritte automatisiert und uns trotzdem die vollständige Kontrolle lässt. Die Zusammenarbeit war verständlich, professionell und lösungsorientiert.“',
      'rev.2.name': 'Thomas, Betriebsleiter',
      'rev.2.role': 'Personalvermittlung',
      'rev.3.q': '„Durch die neue Automatisierung können wir Anfragen und interne Informationen schneller und strukturierter bearbeiten. Viele manuelle Zwischenschritte und ständige Rückfragen sind nicht mehr notwendig. Dadurch wird unser Arbeitsalltag spürbar einfacher.“',
      'rev.3.name': 'Sven, Inhaber',
      'rev.3.role': 'Logistikunternehmen',
      'final.title': 'Zeigen Sie uns die Arbeit, die noch außerhalb Ihrer Hauptsoftware stattfindet',
      'final.body': 'Wenn Ihr Team noch auf E-Mails, PDFs, Tabellen, wiederholte Dateneingabe oder manuelle Nachverfolgung angewiesen ist, können wir die passende Technologie hinter einem maßgeschneiderten und handhabbaren Workflow verbinden.',
      'services.h1': 'Unsere Leistungen',
      'services.tag': 'Wir starten bei den Tools und Prozessen, die Sie bereits nutzen — und konfigurieren, verbinden, schulen oder bauen nur, was fehlt.',
      'services.page.intro': 'KI-Beratung, Umsetzung, Integration, Automatisierung, Mitarbeiterschulung und individuelle Entwicklung mit klarer menschlicher Kontrolle.',
      'solutions.h1': 'Lösungen nach Umfang',
      'solutions.tag': 'Wählen Sie den Projektumfang, der zur tatsächlichen Anforderung passt — kein festes Paket.',
      'industries.h1': 'Branchen',
      'industries.tag': 'Wachsende Unternehmen mit wiederkehrenden Workflows und mehreren Systemen profitieren am meisten.',
      'contact.h1': 'Finden wir den richtigen Einstieg',
      'contact.tag': 'Sagen Sie uns, welcher Prozess noch zu viel Handarbeit braucht, welche Software Ihr Unternehmen bereits nutzt und wo Informationen wiederholt übertragen, verzögert oder verloren gehen.',
      'contact.intro.title': 'Hallo, ich bin Ralf.',
      'contact.intro.body': 'Ich helfe Unternehmen, KI- und Software-Tools auszuwählen, zu konfigurieren, zu verbinden und zu erweitern. Wenn Standardlösungen nicht ausreichen, bauen wir den fehlenden Workflow, die Integration oder das interne System — immer mit klarer menschlicher Kontrolle.',
      'contact.photo.alt': 'Ralf — Gründer von ProcessBoost',
      'contact.prepare.title': 'Was Sie vorbereiten sollten',
      'contact.prepare.p': 'Teilen Sie Firma, Branche, vorhandene Software und den Workflow, den Sie verbessern möchten.',
      'contact.prepare.1': 'Der Prozess mit der meisten Handarbeit',
      'contact.prepare.2': 'Die Software-Tools, die Ihr Team bereits nutzt',
      'contact.prepare.3': 'Wo Informationen erneut erfasst, verzögert oder verloren gehen',
      'contact.next.title': 'Nächster Schritt',
      'contact.next.p': 'Bringen Sie diese Punkte in die Beratung mit, damit wir klären können, ob Konfiguration, Integration, Schulung oder ein individuelles Modul der beste Einstieg ist.',
      'contact.next.note': 'Direkte Kontaktwege werden bereitgestellt, sobald geschäftliche Kontaktdaten für diese Website konfiguriert sind.'
    },
    es: {
      'meta.title': 'Integración de IA gestionada y automatización empresarial a medida | ProcessBoost',
      'meta.description': 'ProcessBoost combina servicios probados de IA y software con integraciones, paneles y automatización a medida alrededor de sus sistemas existentes. Gestionamos la tecnología, formamos a su equipo y mantenemos las decisiones importantes bajo control humano.',
      'services.meta.title': 'Selección de IA, automatización e integración | ProcessBoost',
      'services.meta.description': 'ProcessBoost le ayuda a seleccionar y configurar herramientas de IA, automatizar flujos, integrar software existente, crear módulos personalizados y formar equipos — con control humano.',
      'contact.meta.title': 'Contacto ProcessBoost | Hablar de su flujo de trabajo',
      'contact.meta.description': 'Cuéntele a ProcessBoost qué proceso sigue requiriendo demasiado trabajo manual, qué software ya usa y dónde se retrasa o se vuelve a introducir información. Le ayudamos a encontrar el mejor punto de partida.',
      'nav.services': 'Servicios',
      'nav.solutions': 'Soluciones',
      'nav.how': 'Cómo funciona',
      'nav.industries': 'Sectores',
      'nav.contact': 'Contacto',
      'nav.toggle': 'Abrir menú',
      'cta.consult': 'Reservar consulta gratuita',
      'cta.automate': 'Vea cómo mejorar su flujo de trabajo',
      'cta.discuss': 'Hablar de su flujo de trabajo',
      'link.learnMore': 'Más información →',
      'footer.tagline': 'Conecte, gestione y amplíe la tecnología en la que su negocio ya confía.',
      'footer.copy': '© <span id="year"></span> ProcessBoost. Todos los derechos reservados.',
      'hero.h1': 'Un flujo a medida sobre las herramientas que ya usa',
      'hero.lead': 'Combinamos servicios probados de IA y software con integraciones, paneles y automatización a medida, alrededor de cómo trabaja realmente su empresa. Sus sistemas actuales se mantienen mientras ProcessBoost conecta, gestiona y mejora el trabajo entre ellos — con aprobación humana donde importa.',
      'hero.benefits': 'Una solución gestionada · Sistemas conectados · Flujos a medida · Visibilidad clara · Control humano',
      'hero.trust': 'Empiece con un proceso que todavía depende de correos, PDFs, hojas de cálculo, entradas de datos repetidas o seguimientos manuales.',
      'pos.title': 'Use lo que ya funciona. Construya solo lo que falta.',
      'pos.lead': 'La mayoría de las empresas ya usan software específico de su sector. No reemplazamos sistemas fiables solo para vender otra plataforma. Primero estudiamos sus herramientas actuales y la forma real de trabajar de su equipo.',
      'pos.body': 'Cuando es posible, usamos herramientas probadas y APIs seguras en segundo plano. Las configuramos para su negocio, las conectamos a sus sistemas existentes y unimos el flujo en una solución a medida. Cuando la tecnología disponible no cubre un requisito, construimos la integración, el panel o la herramienta interna que falta.',
      'pos.highlight': 'Su empresa no tiene que adaptarse a otra plataforma rígida. Seleccionamos, conectamos y gestionamos la tecnología alrededor de sus procesos, requisitos y objetivos de negocio.',
      'svc.section': 'Servicios',
      'svc.intro': 'Consultoría de IA, configuración de herramientas, integración, automatización, formación y desarrollo a medida — solo donde aporta valor operativo real.',
      'svc1.title': 'Soluciones de IA gestionadas',
      'svc1.p': 'Seleccionamos y configuramos servicios adecuados de IA y software, los integramos en su flujo de trabajo y gestionamos la configuración técnica según sus requisitos.',
      'svc1.long': 'Evaluamos sus necesidades operativas, recomendamos herramientas adecuadas, las configuramos para sus flujos reales y ayudamos a su equipo a adoptarlas con responsabilidades claras. El objetivo es el uso práctico — no acumular licencias sin uso.',
      'svc2.title': 'Automatización de flujos de trabajo',
      'svc2.p': 'Automatizamos procesos repetitivos, aprobaciones, recordatorios, transferencias de datos y otras tareas operativas que consumen tiempo.',
      'svc2.long': 'Mapeamos los pases que generan retrasos y trabajo duplicado, y automatizamos pasos definidos como transferencias, recordatorios, actualizaciones de estado y aprobaciones. El trabajo rutinario puede ejecutarse con más fiabilidad mientras las excepciones siguen visibles para su equipo.',
      'svc3.title': 'Integraciones de API y sistemas',
      'svc3.p': 'Conectamos su software existente, correo, formularios, calendarios, bases de datos y plataformas de comunicación mediante APIs seguras y flujos de datos controlados.',
      'svc3.long': 'Conectamos el software en el que ya confía — incluido correo, formularios, calendarios, bases de datos y plataformas de comunicación — para que la información se mueva entre sistemas sin reintroducirla constantemente. Las herramientas que ya funcionan bien se mantienen.',
      'svc4.title': 'Paneles a medida y herramientas internas',
      'svc4.p': 'Cuando el software existente no ofrece la interfaz o la funcionalidad adecuada, construimos el panel, portal, módulo o aplicación interna que falta.',
      'svc4.long': 'Cuando el software estándar no cubre un requisito específico de la empresa, desarrollamos la pieza que falta: un módulo, panel, portal o aplicación interna. El desarrollo a medida se usa de forma selectiva — solo cuando la configuración y la integración no bastan.',
      'svc5.title': 'Documentos, datos e informes',
      'svc5.p': 'Procesamos correos, PDFs y documentos, organizamos información, generamos informes y mantenemos los datos accesibles y precisos.',
      'svc5.long': 'Le ayudamos a procesar correos, PDFs y otros documentos, estructurar la información extraída y crear informes que mantengan los datos empresariales precisos y accesibles. Así se reduce la búsqueda, la copia y los registros inconsistentes.',
      'svc6.title': 'Formación, soporte y mejora continua',
      'svc6.p': 'Formamos a sus empleados, supervisamos la solución implementada, ofrecemos soporte continuo y mejoramos el flujo a medida que cambian sus requisitos.',
      'svc6.long': 'Formamos a los empleados para usar las herramientas y flujos automatizados de forma segura y eficaz. Roles claros, reglas de aprobación y orientación práctica facilitan la adopción y mantienen las decisiones importantes bajo control humano.',
      'flow.title': 'De pases manuales a un flujo conectado',
      'flow.intro': 'Un ejemplo práctico de cómo ProcessBoost mejora el trabajo entre sus sistemas existentes.',
      'flow.s1.title': 'Llega la información',
      'flow.s1.p': 'La información llega por correo, formularios, PDFs, mensajes o desde sus sistemas existentes e inicia el flujo.',
      'flow.s2.title': 'Los datos se preparan',
      'flow.s2.p': 'Los detalles relevantes se extraen, organizan y revisan para que el siguiente paso continúe sin confusión.',
      'flow.s3.title': 'Se conectan sistemas y personas',
      'flow.s3.p': 'ProcessBoost coordina el traspaso al software, empleado o departamento correcto — sin cambiar manualmente entre herramientas desconectadas.',
      'flow.s4.title': 'Aprobaciones y excepciones visibles',
      'flow.s4.p': 'Las aprobaciones, errores y excepciones permanecen visibles, mientras las decisiones importantes siguen en manos de su equipo.',
      'ctrl.title': 'Automatización que apoya a su equipo — no una caja negra',
      'ctrl.lead': 'ProcessBoost automatiza trabajo claramente definido mientras su empresa decide qué puede ejecutarse solo, qué requiere aprobación y cuándo un empleado debe intervenir.',
      'ctrl.can.title': 'El sistema puede',
      'ctrl.can.1': 'Extraer y organizar información',
      'ctrl.can.2': 'Transferir datos entre herramientas existentes',
      'ctrl.can.3': 'Preparar documentos e informes',
      'ctrl.can.4': 'Enviar recordatorios y actualizaciones de estado',
      'ctrl.can.5': 'Completar acciones rutinarias aprobadas',
      'ctrl.can.6': 'Señalar excepciones e información faltante',
      'ctrl.you.title': 'Su equipo controla',
      'ctrl.you.1': 'Permisos, acceso a sistemas externos y límites operativos',
      'ctrl.you.2': 'Reglas de aprobación para acciones importantes',
      'ctrl.you.3': 'Roles y responsabilidades de empleados',
      'ctrl.you.4': 'Historiales de actividad y auditorías',
      'ctrl.you.5': 'Controles de pausa y anulación',
      'ctrl.you.6': 'Decisiones finales y casos excepcionales',
      'ctrl.note': 'Cada automatización se diseña con responsabilidades claras, aprobación humana cuando haga falta e historial de actividad transparente.',
      'how.title': 'Cómo funciona',
      'how.s1.title': 'Analizamos su flujo y sus herramientas',
      'how.s1.p': 'Examinamos el proceso, las personas involucradas y el software que su empresa ya usa.',
      'how.s2.title': 'Identificamos la brecha real',
      'how.s2.p': 'Encontramos los pases manuales, el trabajo repetido, los retrasos y los errores que generan el mayor coste operativo.',
      'how.s3.title': 'Elegimos el mejor enfoque',
      'how.s3.p': 'Determinamos si conviene configurar una herramienta existente, conectar varios sistemas o crear una solución a medida.',
      'how.s4.title': 'Construimos, conectamos y probamos',
      'how.s4.p': 'Implementamos la solución y la probamos con flujos realistas, aprobaciones y casos de excepción.',
      'how.s5.title': 'Operamos, formamos y mejoramos',
      'how.s5.p': 'Formamos a su equipo, supervisamos la solución, ofrecemos soporte continuo y mejoramos el flujo a medida que cambian sus requisitos y sistemas.',
      'sol.title': 'Soluciones que coinciden con el requisito real',
      'sol.intro': 'Estos son posibles alcances de proyecto — no módulos prefabricados ni paquetes fijos.',
      'sol.1.title': 'Configurar una herramienta existente',
      'sol.1.p': 'Seleccionar y configurar una solución de IA o software existente y formar al equipo para usarla con eficacia.',
      'sol.2.title': 'Conectar y automatizar un flujo',
      'sol.2.p': 'Conectar sistemas existentes mediante APIs y flujos automatizados para que la información se mueva sin trabajo manual repetido.',
      'sol.3.title': 'Construir lo que falta',
      'sol.3.p': 'Desarrollar la integración, el panel, portal o aplicación interna que falta y combinarla con servicios probados que operan de forma segura en segundo plano.',
      'ind.title': 'Empresas que más se benefician',
      'ind.intro': 'ProcessBoost es más adecuado para empresas en crecimiento con flujos recurrentes, varios empleados, múltiples sistemas de software e información importante que todavía se gestiona por correo, PDFs u hojas de cálculo.',
      'ind.1': 'Administración de propiedades',
      'ind.2': 'Logística, freight brokerage y 3PL',
      'ind.3': 'Staffing y reclutamiento',
      'ind.4': 'Mayoristas y distribución',
      'ind.5': 'Operaciones de servicio multiubicación',
      'ind.6': 'Servicios profesionales',
      'ind.more': 'El sector es solo el punto de partida. Lo decisivo es si el trabajo manual, los sistemas desconectados o los procesos específicos de la empresa limitan la eficiencia y el crecimiento.',
      'out.title': 'Lo que pueden cambiar unos flujos mejor conectados',
      'out.intro': 'El resultado exacto depende del proceso, pero el objetivo siempre es una mejora práctica que los empleados noten en su trabajo diario.',
      'out.1.title': 'Menos administración repetitiva',
      'out.1.p': 'La información se captura una vez, se prepara automáticamente y se transfiere al sistema correcto sin copias repetidas ni seguimientos manuales.',
      'out.2.title': 'Control operativo más claro',
      'out.2.p': 'Los empleados ven el estado actual, las aprobaciones necesarias, la información faltante y los casos excepcionales desde un flujo controlado.',
      'out.3.title': 'Respuesta y procesamiento más rápidos',
      'out.3.p': 'El trabajo rutinario avanza automáticamente, mientras las decisiones importantes y los casos inusuales se envían a la persona adecuada.',
      'rev.title': 'Lo que dicen nuestros clientes',
      'rev.intro': 'Comentarios prácticos de empresas que automatizaron flujos de trabajo reales con ProcessBoost.',
      'rev.1.q': '“ProcessBoost nos ayudó a simplificar varios procesos administrativos que requerían mucho tiempo. Ahora nuestro equipo dedica menos tiempo a tareas repetitivas y tiene una visión mucho más clara de las operaciones diarias. La solución fue diseñada específicamente para nuestra forma de trabajar.”',
      'rev.1.name': 'José, Gerente de Operaciones',
      'rev.1.role': 'Agencia de contratación',
      'rev.2.q': '“No queríamos otra herramienta estándar que nos obligara a cambiar nuestros procesos. ProcessBoost creó un sistema personalizado que automatiza pasos importantes sin quitarnos el control. Todo el proyecto se desarrolló de forma clara, práctica y profesional.”',
      'rev.2.name': 'Javi, Director General',
      'rev.2.role': 'Administración de fincas',
      'rev.3.q': '“La nueva automatización ha hecho que nuestro trabajo sea más rápido y organizado. Ahora podemos gestionar las consultas de los clientes y la información interna con menos seguimiento manual. El cambio ha reducido considerablemente la carga de trabajo diaria.”',
      'rev.3.name': 'Manolo, Propietario',
      'rev.3.role': 'Empresa de logística',
      'final.title': 'Muéstrenos el trabajo que todavía ocurre fuera de su software principal',
      'final.body': 'Si su equipo aún depende de correos, PDFs, hojas de cálculo, entradas de datos repetidas o seguimientos manuales, podemos conectar la tecnología adecuada detrás de un flujo a medida y manejable.',
      'services.h1': 'Nuestros servicios',
      'services.tag': 'Empezamos con las herramientas y procesos que ya usa — luego configuramos, conectamos, formamos o construimos solo lo que falta.',
      'services.page.intro': 'Consultoría de IA, implementación, integración, automatización, formación y desarrollo a medida con control humano claro.',
      'solutions.h1': 'Soluciones por alcance',
      'solutions.tag': 'Elija el nivel de proyecto que coincida con el requisito real — no un paquete fijo.',
      'industries.h1': 'Sectores',
      'industries.tag': 'Las empresas en crecimiento con flujos recurrentes y varios sistemas son las que más se benefician.',
      'contact.h1': 'Encontremos el punto de partida correcto',
      'contact.tag': 'Cuéntenos qué proceso sigue requiriendo demasiado trabajo manual, qué software ya usa su empresa y dónde la información se transfiere, se retrasa o se pierde de forma repetida.',
      'contact.intro.title': 'Hola, soy Ralf.',
      'contact.intro.body': 'Ayudo a las empresas a seleccionar, configurar, conectar y ampliar herramientas de IA y software. Cuando las soluciones estándar no bastan, construimos el flujo, la integración o el sistema interno que falta — siempre con control humano claro.',
      'contact.photo.alt': 'Ralf — fundador de ProcessBoost',
      'contact.prepare.title': 'Qué preparar',
      'contact.prepare.p': 'Comparta su empresa, sector, software existente y el flujo que desea mejorar.',
      'contact.prepare.1': 'El proceso que aún genera más trabajo manual',
      'contact.prepare.2': 'Las herramientas de software que su equipo ya usa',
      'contact.prepare.3': 'Dónde se reintroduce, retrasa o pierde información',
      'contact.next.title': 'Siguiente paso',
      'contact.next.p': 'Traiga estos detalles a la consulta para identificar si la mejor opción inicial es configuración, integración, formación o un módulo a medida.',
      'contact.next.note': 'Los canales de contacto directo se facilitarán cuando se configuren los datos comerciales de contacto en este sitio.'
    }
  };

  window.applyTranslations = function (lang) {
    var dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;
      var value = dict[key];
      if (typeof value !== 'string') return;

      if (el.tagName === 'META' && el.getAttribute('name') === 'description') {
        el.setAttribute('content', value);
        return;
      }
      if (el.tagName === 'TITLE') {
        document.title = value;
        return;
      }
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = value;
        var yearEl = el.querySelector('#year');
        if (yearEl) yearEl.textContent = String(new Date().getFullYear());
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      var value = dict[key];
      if (typeof value === 'string') el.setAttribute('aria-label', value);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      var value = dict[key];
      if (typeof value === 'string') el.setAttribute('alt', value);
    });
  };
})();

/* Language switcher & persistence */
(function () {
  var buttons = document.querySelectorAll('.lang-switch [data-lang]');
  var blocks = document.querySelectorAll('[data-lang-block]');
  var supported = { en: true, de: true, es: true };
  var stored = localStorage.getItem('site.lang') || 'en';
  if (!supported[stored]) stored = 'en';

  setLanguage(stored, true);

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  function setLanguage(lang, skipStorage) {
    if (!supported[lang]) lang = 'en';
    if (!skipStorage) localStorage.setItem('site.lang', lang);
    document.documentElement.setAttribute('lang', lang);

    buttons.forEach(function (b) {
      if (b.getAttribute('data-lang') === lang) b.classList.add('active');
      else b.classList.remove('active');
    });

    if (typeof window.applyTranslations === 'function') {
      window.applyTranslations(lang);
    }

    blocks.forEach(function (el) {
      if (el.getAttribute('data-lang-block') === lang) el.classList.remove('hidden');
      else el.classList.add('hidden');
    });
  }
})();

/* Footer year */
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();

/* Legacy service anchors */
(function () {
  var map = {
    inquiries: 'tool-selection',
    admin: 'workflow-automation',
    assistants: 'training',
    crm: 'custom-modules',
    documents: 'documents-data'
  };
  var hash = (location.hash || '').replace(/^#/, '');
  if (map[hash]) {
    location.hash = map[hash];
  }
})();
