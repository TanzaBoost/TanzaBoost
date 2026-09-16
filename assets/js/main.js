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
      'meta.title': 'Custom AI & Business Automation Solutions | TanzaBoost',
      'meta.description': 'TanzaBoost builds custom AI assistants, business automations, databases, and workflow systems that save time, reduce manual work, and keep your company in control.',
      'nav.services': 'Services',
      'nav.solutions': 'Solutions',
      'nav.how': 'How It Works',
      'nav.industries': 'Industries',
      'nav.contact': 'Contact',
      'nav.toggle': 'Open menu',
      'cta.consult': 'Book a Free Consultation',
      'cta.automate': 'See What We Can Automate',
      'cta.discuss': 'Discuss Your Workflow',
      'cta.whatsapp': 'WhatsApp',
      'cta.whatsappContact': 'Contact Us on WhatsApp',
      'link.learnMore': 'Learn more →',
      'footer.tagline': 'Custom AI and automation systems built around your business.',
      'footer.copy': '© <span id="year"></span> TanzaBoost. All rights reserved.',

      'hero.h1': 'Make Your Business Faster, Simpler, and Easier to Manage',
      'hero.lead': 'We build custom AI and automation systems that reduce manual work, improve customer service, and give you full control over your business processes.',
      'hero.benefits': 'Less manual work · Faster processes · Fewer mistakes · 24/7 assistance · Full control',
      'hero.trust': 'Start with one repetitive task. We will show you how it can be improved or automated.',

      'pos.title': 'We Do More Than Introduce AI',
      'pos.lead': 'Our goal is to save time, reduce mistakes, improve customer service, and make your company easier to manage.',
      'pos.body': 'We study how your business works and create a solution that fits your actual processes — from one simple automation to a complete internal management system.',

      'svc.section': 'Services',
      'svc.intro': 'Custom automations built around the work your team already does.',
      'svc1.title': 'Customer Inquiries',
      'svc1.p': 'Automatically respond to new inquiries, collect the required information, and forward a complete summary to the right employee.',
      'svc2.title': 'Administrative Work',
      'svc2.p': 'Automate repetitive data entry, reminders, approvals, file organization, and other time-consuming office tasks.',
      'svc3.title': 'AI Assistants',
      'svc3.p': 'Support customers and employees around the clock while important decisions remain under human control.',
      'svc4.title': 'CRM and Databases',
      'svc4.p': 'Organize customers, projects, documents, and communication in one central and searchable system.',
      'svc5.title': 'Documents and Quotations',
      'svc5.p': 'Prepare quotations, process documents, identify missing information, and request approval when required.',
      'svc6.title': 'Integrations and Reports',
      'svc6.p': 'Connect your existing tools and create clear dashboards, reports, and automatic status updates.',

      'flow.title': 'From New Inquiry to Complete Job Information',
      'flow.intro': 'A practical example of how automation can support your daily work.',
      'flow.s1.title': 'Customer Sends an Inquiry',
      'flow.s1.p': 'A request arrives through the website, email, or WhatsApp.',
      'flow.s2.title': 'The Assistant Responds Immediately',
      'flow.s2.p': 'The customer receives the correct questions or form.',
      'flow.s3.title': 'Information Is Organized',
      'flow.s3.p': 'Contact details, photos, location, requirements, and preferred times are collected.',
      'flow.s4.title': 'Your Team Receives a Complete Summary',
      'flow.s4.p': 'The responsible employee receives everything needed to continue the job.',

      'ctrl.title': 'A 24/7 Assistant — With Your Business in Control',
      'ctrl.lead': 'Your customized assistant can handle repetitive work at any time, while your company decides what it may complete independently and what requires human approval.',
      'ctrl.can.title': 'The Assistant Can',
      'ctrl.can.1': 'Respond to new inquiries',
      'ctrl.can.2': 'Collect and organize information',
      'ctrl.can.3': 'Prepare documents and summaries',
      'ctrl.can.4': 'Send reminders and status updates',
      'ctrl.can.5': 'Answer common questions',
      'ctrl.can.6': 'Escalate important cases',
      'ctrl.you.title': 'You Stay in Control',
      'ctrl.you.1': 'Define permissions and limits',
      'ctrl.you.2': 'Require approval for important actions',
      'ctrl.you.3': 'Review activity histories',
      'ctrl.you.4': 'Pause or override automations',
      'ctrl.you.5': 'Assign employee roles',
      'ctrl.you.6': 'Take over any conversation or process',
      'ctrl.note': 'Built with safeguards, human approval when needed, and clear activity history — so you keep full operational control.',

      'how.title': 'How It Works',
      'how.s1.title': 'We Analyze Your Workflow',
      'how.s1.p': 'You show us the tasks and processes that consume the most time.',
      'how.s2.title': 'We Design the Solution',
      'how.s2.p': 'We identify what can be automated and where human control should remain.',
      'how.s3.title': 'We Build and Test It',
      'how.s3.p': 'We create the system around your real workflow and test it with practical scenarios.',
      'how.s4.title': 'We Improve It With You',
      'how.s4.p': 'The solution can grow as your business, workload, and requirements change.',

      'sol.title': 'Solutions That Fit Your Scale',
      'sol.intro': 'These are possible project sizes — not fixed packages.',
      'sol.1.title': 'Start With One Task',
      'sol.1.p': 'Automate one repetitive process and demonstrate the practical value quickly.',
      'sol.2.title': 'Connect Several Processes',
      'sol.2.p': 'Connect customer inquiries, documents, reminders, communication, and internal workflows.',
      'sol.3.title': 'Build a Complete System',
      'sol.3.p': 'Create a customized platform with databases, dashboards, permissions, and AI assistance.',

      'ind.title': 'Industries We Support',
      'ind.intro': 'Workflow automation for businesses with recurring customer and office work.',
      'ind.1': 'Contractors and Skilled Trades',
      'ind.2': 'Construction Companies',
      'ind.3': 'Property Management',
      'ind.4': 'Cleaning Companies',
      'ind.5': 'Auto Repair Shops',
      'ind.6': 'Professional Services',
      'ind.more': 'And many more — including logistics, hotels, online stores, recruitment, restaurants, and training providers.',

      'final.title': 'Start With One Repetitive Task',
      'final.body': 'Show us one task your employees repeat every day, and we will show you how it could be completed faster, more reliably, and with less manual work.',

      'services.h1': 'Our Services',
      'services.tag': 'Custom AI and automation systems tailored to how your business actually works.',
      'services.page.intro': 'From a single repetitive task to a complete internal system — always with human control.',

      'solutions.h1': 'Solutions by Scale',
      'solutions.tag': 'Choose the level that matches your current needs. Every solution is built individually.',

      'industries.h1': 'Industries',
      'industries.tag': 'We adapt automation to the real workflows in your industry.',

      'contact.h1': 'Contact',
      'contact.tag': 'Tell us about one repetitive task — we will show you what can be improved or automated.',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.msg': 'Message',
      'contact.send': 'Send message',
      'contact.orwa': 'Or message via WhatsApp',
      'contact.whatsapp.title': 'WhatsApp',
      'contact.whatsapp.p': 'Fastest response during business hours.',
      'contact.email.title': 'Email',
      'contact.email.p': 'Share your company name, industry, and the task you want to improve.',
      'contact.location.title': 'Consultation',
      'contact.location.p': 'Book a free consultation to discuss your workflow and priorities.',
      'contact.whatsappBtn': 'Open WhatsApp',
      'contact.emailBtn': 'Write email',
      'contact.appointmentBtn': 'Book a Free Consultation',
      'contact.intro.title': "Hi, I'm Ralf.",
      'contact.intro.body': 'I help businesses reduce manual work with custom AI assistants and automation systems — built around your real processes, with full control staying in your hands.',
      'contact.photo.alt': 'Ralf — founder of TanzaBoost'
    },
    sw: {
      'meta.title': 'Suluhisho Maalum za AI na Otomatiki ya Biashara | TanzaBoost',
      'meta.description': 'TanzaBoost hutengeneza wasaidizi wa AI, otomatiki za biashara, hifadhidata, na mifumo ya kazi inayookoa muda, kupunguza kazi za mikono, na kuweka kampuni yako katika udhibiti.',
      'nav.services': 'Huduma',
      'nav.solutions': 'Suluhisho',
      'nav.how': 'Inavyofanya Kazi',
      'nav.industries': 'Sekta',
      'nav.contact': 'Mawasiliano',
      'nav.toggle': 'Fungua menyu',
      'cta.consult': 'Weka Mashauriano Bure',
      'cta.automate': 'Angalia Tunachoweza Kufanya Otomatiki',
      'cta.discuss': 'Jadili Mtiririko Wako wa Kazi',
      'cta.whatsapp': 'WhatsApp',
      'cta.whatsappContact': 'Wasiliana Kupitia WhatsApp',
      'link.learnMore': 'Jifunze zaidi →',
      'footer.tagline': 'Mifumo maalum ya AI na otomatiki iliyojengwa kuzunguka biashara yako.',
      'footer.copy': '© <span id="year"></span> TanzaBoost. Haki zote zimehifadhiwa.',

      'hero.h1': 'Fanya Biashara Yako Iwe Haraka Zaidi, Rahisi Zaidi, na Nyepesi Kusimamia',
      'hero.lead': 'Tunajenga mifumo maalum ya AI na otomatiki inayopunguza kazi za mikono, kuboresha huduma kwa wateja, na kukupa udhibiti kamili wa michakato ya biashara yako.',
      'hero.benefits': 'Kazi chache za mikono · Michakato ya haraka · Makosa machache · Msaada wa 24/7 · Udhibiti kamili',
      'hero.trust': 'Anza na kazi moja inayorudiwa. Tutakuonyesha jinsi inavyoweza kuboreshwa au kufanywa otomatiki.',

      'pos.title': 'Tunafanya Zaidi ya Kuanzisha AI',
      'pos.lead': 'Lengo letu ni kuokoa muda, kupunguza makosa, kuboresha huduma kwa wateja, na kufanya kampuni yako iwe rahisi kusimamia.',
      'pos.body': 'Tunasoma jinsi biashara yako inavyofanya kazi na kuunda suluhisho linalolingana na michakato yako halisi — kutoka otomatiki moja rahisi hadi mfumo kamili wa usimamizi wa ndani.',

      'svc.section': 'Huduma',
      'svc.intro': 'Otomatiki maalum zilizojengwa kuzunguka kazi ambazo timu yako tayari inafanya.',
      'svc1.title': 'Maombi ya Wateja',
      'svc1.p': 'Jibu kiotomatiki maombi mapya, kusanya taarifa zinazohitajika, na peleka muhtasari kamili kwa mfanyakazi sahihi.',
      'svc2.title': 'Kazi za Ofisi',
      'svc2.p': 'Fanya otomatiki kuingiza data, vikumbusho, idhini, kupanga faili, na kazi nyingine za ofisi zinazochukua muda.',
      'svc3.title': 'Wasaidizi wa AI',
      'svc3.p': 'Saidia wateja na wafanyakazi saa nzima huku maamuzi muhimu yakibaki chini ya udhibiti wa binadamu.',
      'svc4.title': 'CRM na Hifadhidata',
      'svc4.p': 'Panga wateja, miradi, nyaraka, na mawasiliano katika mfumo mmoja wa kati unaoweza kutafutwa.',
      'svc5.title': 'Nyaraka na Makadirio',
      'svc5.p': 'Andaa makadirio, chakata nyaraka, tambua taarifa zinazokosekana, na omba idhini inapohitajika.',
      'svc6.title': 'Uunganishaji na Ripoti',
      'svc6.p': 'Unganisha zana zako zilizopo na unda dashibodi wazi, ripoti, na masasisho ya hali kiotomatiki.',

      'flow.title': 'Kutoka Ombi Jipya Hadi Taarifa Kamili za Kazi',
      'flow.intro': 'Mfano wa vitendo wa jinsi otomatiki inavyoweza kusaidia kazi yako ya kila siku.',
      'flow.s1.title': 'Mteja Anatuma Ombi',
      'flow.s1.p': 'Ombi linafika kupitia tovuti, barua pepe, au WhatsApp.',
      'flow.s2.title': 'Msaidizi Anajibu Mara Moja',
      'flow.s2.p': 'Mteja anapokea maswali au fomu sahihi.',
      'flow.s3.title': 'Taarifa Zinapangwa',
      'flow.s3.p': 'Maelezo ya mawasiliano, picha, eneo, mahitaji, na nyakati zinazopendelewa hukusanywa.',
      'flow.s4.title': 'Timu Yako Inapokea Muhtasari Kamili',
      'flow.s4.p': 'Mfanyakazi anayehusika anapokea kila kitu kinachohitajika kuendelea na kazi.',

      'ctrl.title': 'Msaidizi wa 24/7 — Biashara Yako Ikiwa katika Udhibiti',
      'ctrl.lead': 'Msaidizi wako maalum anaweza kushughulikia kazi zinazorudiwa wakati wowote, huku kampuni yako ikiamua anachoweza kukamilisha peke yake na kinachohitaji idhini ya binadamu.',
      'ctrl.can.title': 'Msaidizi Anaweza',
      'ctrl.can.1': 'Kujibu maombi mapya',
      'ctrl.can.2': 'Kukusanya na kupanga taarifa',
      'ctrl.can.3': 'Kuandaa nyaraka na muhtasari',
      'ctrl.can.4': 'Kutuma vikumbusho na masasisho ya hali',
      'ctrl.can.5': 'Kujibu maswali ya kawaida',
      'ctrl.can.6': 'Kupandisha kesi muhimu',
      'ctrl.you.title': 'Unabaki na Udhibiti',
      'ctrl.you.1': 'Weka ruhusa na mipaka',
      'ctrl.you.2': 'Hitaji idhini kwa vitendo muhimu',
      'ctrl.you.3': 'Kagua historia za shughuli',
      'ctrl.you.4': 'Simamisha au batilisha otomatiki',
      'ctrl.you.5': 'Weka majukumu ya wafanyakazi',
      'ctrl.you.6': 'Chukua mazungumzo au mchakato wowote',
      'ctrl.note': 'Imejengwa kwa ulinzi, idhini ya binadamu inapohitajika, na historia wazi ya shughuli — ili uendelee kuwa na udhibiti kamili wa uendeshaji.',

      'how.title': 'Inavyofanya Kazi',
      'how.s1.title': 'Tunachambua Mtiririko Wako wa Kazi',
      'how.s1.p': 'Unatuonyesha kazi na michakato inayochukua muda mwingi.',
      'how.s2.title': 'Tunabuni Suluhisho',
      'how.s2.p': 'Tunatambua kinachoweza kufanywa otomatiki na pale udhibiti wa binadamu unapaswa kubaki.',
      'how.s3.title': 'Tunajenga na Kujaribu',
      'how.s3.p': 'Tunaunda mfumo kuzunguka mtiririko wako halisi wa kazi na kuujaribu kwa hali za vitendo.',
      'how.s4.title': 'Tunaboresha Pamoja Nawe',
      'how.s4.p': 'Suluhisho linaweza kukua kadri biashara, mzigo wa kazi, na mahitaji yako yanavyobadilika.',

      'sol.title': 'Suluhisho Zinazolingana na Ukubwa Wako',
      'sol.intro': 'Hivi ni viwango vinavyowezekana vya mradi — si vifurushi vya bei thabiti.',
      'sol.1.title': 'Anza na Kazi Moja',
      'sol.1.p': 'Fanya otomatiki mchakato mmoja unaorudiwa na uonyeshe thamani ya vitendo haraka.',
      'sol.2.title': 'Unganisha Michakato Kadhaa',
      'sol.2.p': 'Unganisha maombi ya wateja, nyaraka, vikumbusho, mawasiliano, na mtiririko wa ndani.',
      'sol.3.title': 'Jenga Mfumo Kamili',
      'sol.3.p': 'Unda jukwaa maalum lenye hifadhidata, dashibodi, ruhusa, na msaada wa AI.',

      'ind.title': 'Sekta Tunazosaidia',
      'ind.intro': 'Otomatiki ya mtiririko wa kazi kwa biashara zenye kazi za wateja na ofisi zinazorudiwa.',
      'ind.1': 'Makandarasi na Ufundi Stadi',
      'ind.2': 'Makampuni ya Ujenzi',
      'ind.3': 'Usimamizi wa Mali',
      'ind.4': 'Makampuni ya Usafi',
      'ind.5': 'Warsha za Magari',
      'ind.6': 'Huduma za Kitaalamu',
      'ind.more': 'Na nyingine nyingi — ikiwa ni pamoja na usafirishaji, hoteli, maduka mtandaoni, ajira, migahawa, na watoa mafunzo.',

      'final.title': 'Anza na Kazi Moja Inayorudiwa',
      'final.body': 'Tuonyeshe kazi moja ambayo wafanyakazi wako hurudia kila siku, nasi tutakuonyesha jinsi inavyoweza kukamilishwa haraka zaidi, kwa uhakika zaidi, na kwa kazi chache za mikono.',

      'services.h1': 'Huduma Zetu',
      'services.tag': 'Mifumo maalum ya AI na otomatiki inayolingana na jinsi biashara yako inavyofanya kazi.',
      'services.page.intro': 'Kutoka kazi moja inayorudiwa hadi mfumo kamili wa ndani — daima ukiwa na udhibiti wa binadamu.',

      'solutions.h1': 'Suluhisho Kulingana na Ukubwa',
      'solutions.tag': 'Chagua kiwango kinacholingana na mahitaji yako ya sasa. Kila suluhisho hujengwa kibinafsi.',

      'industries.h1': 'Sekta',
      'industries.tag': 'Tunabadilisha otomatiki ili ilingane na mtiririko halisi wa kazi katika sekta yako.',

      'contact.h1': 'Mawasiliano',
      'contact.tag': 'Tuambie kuhusu kazi moja inayorudiwa — tutakuonyesha kinachoweza kuboreshwa au kufanywa otomatiki.',
      'contact.name': 'Jina',
      'contact.email': 'Barua pepe',
      'contact.msg': 'Ujumbe',
      'contact.send': 'Tuma ujumbe',
      'contact.orwa': 'Au tuma kupitia WhatsApp',
      'contact.whatsapp.title': 'WhatsApp',
      'contact.whatsapp.p': 'Majibu ya haraka wakati wa saa za kazi.',
      'contact.email.title': 'Barua Pepe',
      'contact.email.p': 'Shiriki jina la kampuni, sekta, na kazi unayotaka kuboresha.',
      'contact.location.title': 'Mashauriano',
      'contact.location.p': 'Weka mashauriano bure ili kujadili mtiririko wako wa kazi na vipaumbele.',
      'contact.whatsappBtn': 'Fungua WhatsApp',
      'contact.emailBtn': 'Andika barua pepe',
      'contact.appointmentBtn': 'Weka Mashauriano Bure',
      'contact.intro.title': 'Habari, mimi ni Ralf.',
      'contact.intro.body': 'Ninasaidia biashara kupunguza kazi za mikono kwa wasaidizi wa AI na mifumo ya otomatiki — iliyojengwa kuzunguka michakato yako halisi, huku udhibiti ukibaki mikononi mwako.',
      'contact.photo.alt': 'Ralf — mwanzilishi wa TanzaBoost'
    }
  };

  window.applyTranslations = function (lang) {
    var dict = translations[lang] || {};
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
  var stored = localStorage.getItem('site.lang') || 'en';

  setLanguage(stored, true);

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  function setLanguage(lang, skipStorage) {
    if (!skipStorage) localStorage.setItem('site.lang', lang);
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'sw');

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
