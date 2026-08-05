/* Charm of Flowers — čeština / українська
   ------------------------------------------------------------------
   Všechny texty stránky jsou na jednom místě, v tomhle slovníku.
   V HTML jsou jen klíče:
     data-i18n="klic"        → textContent
     data-i18n-html="klic"   → innerHTML (jen tam, kde je uvnitř značka)
     data-i18n-alt="klic"    → alt
     data-i18n-aria="klic"   → aria-label
     data-i18n-title="klic"  → title
     data-i18n-ph="klic"     → placeholder
   Úprava textu = úprava jednoho řádku níž, ne hledání po šabloně.   */
(function () {
  'use strict';

  var DICT = {
    cs: {
      /* --- hlava dokumentu --- */
      docTitle: 'Charm of Flowers — květinářství v Plzni | Kytice na míru a rozvoz',
      docDesc: 'Květinářství Charm of Flowers na Pražské 43 v Plzni. Kytice na míru, svatební floristika, kurzy vázání a rozvoz květin po Plzni každý den od 9:00 do 20:00.',
      ogLocale: 'cs_CZ',

      /* --- navigace --- */
      katDocTitle: 'Katalog kytic — Charm of Flowers Plzeň',
      katDocDesc: 'Katalog kytic květinářství Charm of Flowers v Plzni. Kytice od 1 000 Kč, květinové boxy, svatební floristika. Rozvoz po Plzni od 30 do 60 minut.',

      skip: 'Přejít k obsahu',
      logoAria: 'Charm of Flowers — úvod',
      navHome: 'Domů',
      navCatalog: 'Katalog',
      menuAria: 'Menu',
      navAria: 'Hlavní navigace',
      langAria: 'Volba jazyka',

      /* --- hero --- */
      heroEyebrow: 'Květinářství · Pražská 43, Plzeň',
      heroH1: 'Charm of Flowers — květinářství v Plzni',
      heroLede: 'Každá kytice má svůj příběh.',
      heroSub: 'Vážeme na míru — od malé kytice do bytu po svatební výzdobu. Co nestihnete vyzvednout, přivezeme.',
      heroCta1: 'Nezávazná poptávka',
      heroCta2: 'Zavolat 723 477 375',
      fact1L: 'Obchod',
      fact1V: 'Po–So 9:00–18:00 · Ne 10:00–15:00',
      fact2L: 'Rozvoz po Plzni',
      fact2V: 'denně 9:00–20:00 · obvykle do 30–60 minut',
      fact3L: 'Domluvíme se',
      fact3V: 'česky · anglicky · ukrajinsky',
      heroCap: 'Hortenzie · sezónní kytice',
      heroAlt: 'Dvě kytice modrých hortenzií zabalené v bílém papíru',

      /* --- služby --- */
      svcEyebrow: 'Co u nás pořídíte',
      svcTitle: 'Čtyři důvody, proč zajít na Pražskou',
      svc1T: 'Kytice na míru',
      svc1P: 'Řekněte nám příležitost a rozpočet — zbytek vymyslíme. Vážeme z toho, co je zrovna nejčerstvější.',
      svc2T: 'Svatební floristika',
      svc2P: 'Svatební kytice, korsáže, výzdoba obřadu i tabule. Termíny rezervujeme s předstihem, ozvěte se včas.',
      svc3T: 'Kurzy a workshopy',
      svc3P: 'Naučíme vás vázat. Pro začátečníky, party i firmy — ve skupině nebo jeden na jednoho.',
      svc4T: 'Rozvoz po Plzni',
      svc4P: 'Vozíme každý den od 9:00 do 20:00. Čas doručení si zarezervujete dopředu, ať kytice dorazí ve správnou chvíli.',
      svcAlt: 'Podzimní kytice z růží, karafiátů a eukalyptu převázaná hedvábnou stuhou',

      /* --- ceník --- */
      budEyebrow: 'Jak si objednat',
      budTitle: 'Stačí nám rozpočet',
      budLede: 'Nemusíte vybírat konkrétní květiny. Řekněte, kolik chcete utratit a pro koho kytice je — složíme ji z toho nejlepšího, co ten den máme.',
      t1C: 'Malá pozornost',
      t1V: 'do 1 000 Kč',
      t1P: 'Kytice na návštěvu, do bytu nebo jen tak. Rychle a bez objednávky předem.',
      t2C: 'Nejčastější volba',
      t2V: '1 000 – 2 000 Kč',
      t2P: 'Narozeniny, výročí, poděkování. Velikost, u které se většina zákazníků zastaví.',
      t3C: 'Autorská kytice',
      t3V: 'od 2 000 Kč',
      t3P: 'Velké vazby a květinové boxy, které jsou vidět už ode dveří.',
      order: 'Objednat',

      prT: 'Kompletní ceník',
      pr1: 'Kytice z denní nabídky', pr1v: 'do 1 000 Kč',
      pr2: 'Kytice na přání', pr2v: '1 000 – 2 000 Kč',
      pr3: 'Autorská kytice, květinový box', pr3v: 'od 2 000 Kč',
      pr4: 'Svatební kytice', pr4v: 'individuálně',
      pr5: 'Výzdoba svatby či akce', pr5v: 'individuálně',
      pr6: 'Kurz vázání, workshop', pr6v: 'na dotaz',
      pr7: 'Rozvoz po Plzni (9–20 h)', pr7v: 'podle vzdálenosti',
      prNote: 'Přesnou cenu vždy potvrdíme předem — telefonicky nebo ve formuláři níže.',

      /* --- galerie --- */
      galEyebrow: 'Poslední práce',
      galTitle: 'Z naší dílny',
      zoom: 'Zvětšit fotku',
      g1: 'Velká kytice růžových pivoňkových růží před vchodem do květinářství',
      g2: 'Dvě kytice modrých hortenzií zabalené v bílém papíru',
      g3: 'Nevěsta se svatební kyticí z krémových růží',
      g4: 'Květinový box Charm of Flowers s růžemi, hortenzií a gerberami',
      g5: 'Kytice z anthurií, růží a kopretin před vchodem do květinářství',
      g6: 'Svatební kytice z bílých eustom a eukalyptu v rukou nevěsty',
      g7: 'Kytice bílých pivoňkových růží na pultu prodejny',
      g8: 'Zákaznice s kyticí gerber a růží v prodejně pod světelným logem',
      g9: 'Květinová výzdoba na stolcích v kosmetickém salonu',
      g10: 'Velká pastelová kytice z růží a karafiátů — koláž se záběrem páru s bílou kyticí',

      /* --- katalog --- */
      katEyebrow: 'Katalog',
      katTitle: 'Vyberte si kytici',
      katLede: 'Ceny jsou orientační — každá kytice je originál z toho, co je ten den nejčerstvější. Vyberte fotku, pošlete poptávku a my se ozveme.',
      chipsAria: 'Filtr katalogu',
      chAll: 'Vše',
      chT1: 'do 1 000 Kč',
      chT2: '1 000 – 2 000 Kč',
      chT3: 'od 2 000 Kč',
      chWed: 'Svatební',
      chBox: 'Boxy a výzdoba',
      kp1: 'do 1 000 Kč',
      kp2: '1 000 – 2 000 Kč',
      kp3: 'od 2 000 Kč',
      kpInd: 'individuálně',
      katCta: 'Chci tuhle',
      katNote: 'Každá kytice je originál — složení se mění podle sezóny a denní nabídky, fotky jsou ilustrační. Styl a barevnost vždy zachováme.',
      tagSeason: 'Sezónní',
      tagWedding: 'Svatební',
      tagBox: 'Box',
      tagDecor: 'Výzdoba',
      kn01: 'Kytice s anthurii', kf01: 'anthurie · růže · kopretiny',
      kn02: 'Svatební kytice z eustom', kf02: 'eustomy · frézie · eukalyptus',
      kn03: 'Bílé pivoňkové růže', kf03: 'trsové růže v bílé',
      kn05: 'Hortenzie v bílém', kf05: 'hortenzie · bílé balení',
      kn06: 'Svatební kytice z růží', kf06: 'krémové růže · frézie',
      kn07: 'Květinový box', kf07: 'růže · hortenzie · gerbery · vzkaz',
      kn08: 'Podzimní vazba se stuhou', kf08: 'růže · karafiáty · eukalyptus',
      kn09: 'Pivoňkové růže grand', kf09: 'trsové pivoňkové růže',
      kn10: 'Gerbery a růže', kf10: 'gerbery · růže · zeleň',
      kn11: 'Slunečnice', kf11: 'slunečnice · delphinium · heřmánek',
      kn12: 'Květinová výzdoba prostoru', kf12: 'salony · kavárny · akce',
      kn13: 'Jiřiny v letním balení', kf13: 'jiřiny · sezónní nabídka',
      ka13: 'Kytice oranžových jiřin v růžovém balení se stuhou Charm of Flowers',
      knFl: 'Nechám to na floristce', kfFl: 'řeknete rozpočet a příležitost — květiny vybereme my',
      kpFl: 'dle rozpočtu',
      stepsEyebrow: 'Jak to funguje',
      stepsTitle: 'Objednávka ve třech krocích',
      st1T: 'Vyberte si',
      st1P: 'Z katalogu, z Instagramu, nebo jen řekněte rozpočet a příležitost — zbytek vymyslíme.',
      st2T: 'Zavolejte nebo napište',
      st2P: 'Telefon 723 477 375, zpráva na Instagramu, nebo poptávkový formulář. Domluvíme detaily a cenu.',
      st3T: 'Vyzvednete, nebo doručíme',
      st3P: 'Na Pražské 43, nebo rozvoz po Plzni a okolí — šetrně a s péčí, od 30 do 60 minut.',
      katFormBtn: 'Poslat poptávku',
      katIgBtn: 'Aktuální kytice na Instagramu',
      katLinkBtn: 'Prohlédnout katalog kytic',

      /* --- recenze --- */
      rvEyebrow: 'Co říkají zákazníci',
      rvTitle: 'Recenze',
      rv1: '„Majitelka váže moc krásné kytice za velmi příznivé ceny."',
      rv1src: 'recenze zákazníka · Živéfirmy.cz',
      rv2: '„Elegantní obchod plný krásných vonících květin."',
      rv2src: 'recenze zákazníka · Živéfirmy.cz',
      rvCta: 'Další recenze na Googlu',

      /* --- příběh --- */
      stEyebrow: 'Příběh za jménem',
      stTitle: 'Květinářství, které začalo podruhé',
      stP1: 'Charm of Flowers vede <strong>Nataliia Ivasiuk</strong>. Vlastní květinářství měla už na Ukrajině — než ho kvůli válce musela nechat za sebou.',
      stP2: 'S manželem našli nový domov v Plzni. Nataliia tu nejdřív pracovala v místním květinářství a pak si otevřela svoje vlastní, od nuly a podruhé v životě.',
      stQ: 'Proto má u nás každá kytice svůj příběh. O odvaze začít znovu — a o tom, že krása umí vyrůst i po těžkých zkouškách.',
      stN1: 'otevření v Plzni',
      stN2: 'kytic na Instagramu',
      stN3: 'jazyky za pultem',
      stAlt: 'Floristka za pultem prodejny se dvěma kyticemi ze slunečnic',

      /* --- FAQ --- */
      faqEyebrow: 'Než se zeptáte',
      faqTitle: 'Časté dotazy',
      q1: 'Jak rychle uvážete kytici?',
      a1: 'Zavolejte nebo napište — domluvíme se, kdy bude kytice připravená. U větších vazeb a květinových boxů počítejte raději den či dva dopředu.',
      q2: 'Rozvážíte květiny v konkrétní čas?',
      a2: 'Ano, rozvážíme po Plzni a okolí každý den od 9:00 do 20:00 — obvykle do 30 až 60 minut. Čas doručení si zarezervujte předem, cenu rozvozu potvrdíme podle vzdálenosti.',
      q3: 'Kdy se ozvat kvůli svatební kytici?',
      a3: 'Čím dřív, tím líp — termíny rezervujeme s předstihem. Na konzultaci probereme styl, barvy i výzdobu obřadu a tabule.',
      q4: 'Domluvím se u vás ukrajinsky nebo anglicky?',
      a4: 'Ano. Domluvíte se česky, anglicky i ukrajinsky — v obchodě, po telefonu i na Instagramu.',
      q5: 'Jak probíhají kurzy vázání?',
      a5: 'Vážeme ve skupině i jeden na jednoho — pro začátečníky, party i firmy. Aktuální termíny najdete na našem Instagramu, nebo se ozvěte.',

      /* --- kontakt + formulář --- */
      coEyebrow: 'Kde nás najdete',
      coTitle: 'Pražská 43, kousek od náměstí',
      coAddrT: 'Adresa',
      coAddr: 'Pražská 38/43<br>301 00 Plzeň 3 — Východní Předměstí',
      coMap: 'Otevřít v mapě',
      coHoursT: 'Otevírací doba',
      coRow1: 'Pondělí – sobota',
      coRow2: 'Neděle',
      coRow3: 'Rozvoz po Plzni',
      coRow3V: 'denně 9:00 – 20:00',
      coOrderT: 'Objednávky',
      coNote: 'Voláme i píšeme zpátky — telefonicky, na Instagramu i na Facebooku.',
      coFollowT: 'Sledujte nás',
      coLinks: 'Všechny odkazy',
      mapTitle: 'Mapa — Charm of Flowers, Pražská 38/43, Plzeň',

      fmT: 'Nezávazná poptávka',
      fmNote: 'Napište, co slavíte a kolik chcete utratit. Ozveme se s návrhem — telefonicky nebo zprávou.',
      fmName: 'Jméno',
      fmPhone: 'Telefon',
      fmDate: 'Na kdy',
      fmBudget: 'Rozpočet',
      fmMsg: 'Vzkaz',
      fmMsgPh: 'Co slavíte, jaké barvy má ráda, kam doručit…',
      fmOpt1: 'do 1 000 Kč',
      fmOpt2: '1 000 – 2 000 Kč',
      fmOpt3: 'od 2 000 Kč',
      fmOpt4: 'svatba — individuálně',
      fmOpt5: 'ještě nevím',
      fmSend: 'Odeslat poptávku',
      fmOk: 'Děkujeme! Poptávka odešla — ozveme se co nejdřív.',

      /* --- chat --- */
      chatAria: 'Napište nám',
      chatT: 'Napište nám',
      chatSub: 'Odpovídáme během otevírací doby, obvykle do pár minut.',
      chatCall: 'Zavolat 723 477 375',
      chatForm: 'Poptávkový formulář',
      chatBtn: 'Napište nám',
      fCena: 'Cena',
      fPrilez: 'Příležitost',

      /* --- patička --- */
      ftShop: 'Prodejna',
      ftContact: 'Kontakt',
      ftSocial: 'Sítě',
      toTop: 'Zpět nahoru',

      /* --- lightbox a lišta --- */
      lbAria: 'Prohlížeč fotek',
      lbClose: 'Zavřít',
      lbPrev: 'Předchozí fotka',
      lbNext: 'Další fotka',
      callBar: 'Zavolat'
    },

    uk: {
      katDocTitle: 'Каталог букетів — Charm of Flowers Пльзень',
      katDocDesc: 'Каталог букетів квіткової крамниці Charm of Flowers у Пльзні. Букети від 1 000 Kč, квіткові коробки, весільна флористика. Доставка по Пльзні від 30 до 60 хвилин.',
      navCatalog: 'Каталог',
      docTitle: 'Charm of Flowers — квіти у Пльзні | Букети на замовлення та доставка',
      docDesc: 'Квіткова крамниця Charm of Flowers на Pražská 43 у Пльзні. Букети на замовлення, весільна флористика, курси в’язання та доставка квітів по Пльзні щодня з 9:00 до 20:00.',
      ogLocale: 'uk_UA',

      skip: 'Перейти до вмісту',
      logoAria: 'Charm of Flowers — на початок',
      navHome: 'Головна',
      menuAria: 'Меню',
      navAria: 'Головна навігація',
      langAria: 'Вибір мови',

      heroEyebrow: 'Квіткова крамниця · Pražská 43, Пльзень',
      heroH1: 'Charm of Flowers — квіткова крамниця у Пльзні',
      heroLede: 'Кожен букет має свою історію.',
      heroSub: 'В’яжемо на замовлення — від невеликого букета додому до весільного оформлення. Що не встигнете забрати, привеземо.',
      heroCta1: 'Залишити запит',
      heroCta2: 'Подзвонити 723 477 375',
      fact1L: 'Магазин',
      fact1V: 'Пн–Сб 9:00–18:00 · Нд 10:00–15:00',
      fact2L: 'Доставка по Пльзні',
      fact2V: 'щодня 9:00–20:00 · зазвичай за 30–60 хвилин',
      fact3L: 'Спілкуємось',
      fact3V: 'чеською · англійською · українською',
      heroCap: 'Гортензії · сезонний букет',
      heroAlt: 'Два букети блакитних гортензій, загорнуті в білий папір',

      svcEyebrow: 'Що у нас є',
      svcTitle: 'Чотири причини завітати до нас',
      svc1T: 'Букети на замовлення',
      svc1P: 'Скажіть привід і бюджет — решту придумаємо. В’яжемо з того, що зараз найсвіжіше.',
      svc2T: 'Весільна флористика',
      svc2P: 'Весільні букети, бутоньєрки, оформлення церемонії та столів. Дату бронюємо заздалегідь, пишіть завчасно.',
      svc3T: 'Курси та воркшопи',
      svc3P: 'Навчимо вас в’язати. Для початківців, компаній і корпоративів — у групі або індивідуально.',
      svc4T: 'Доставка по Пльзні',
      svc4P: 'Возимо щодня з 9:00 до 20:00. Час доставки бронюєте наперед, щоб букет приїхав вчасно.',
      svcAlt: 'Осінній букет із троянд, гвоздик та евкаліпта, перев’язаний шовковою стрічкою',

      budEyebrow: 'Як замовити',
      budTitle: 'Достатньо назвати бюджет',
      budLede: 'Не треба обирати конкретні квіти. Скажіть, скільки хочете витратити і для кого букет — складемо його з найкращого, що є того дня.',
      t1C: 'Невеликий знак уваги',
      t1V: 'до 1 000 Kč',
      t1P: 'Букет у гості, додому або просто так. Швидко й без попереднього замовлення.',
      t2C: 'Найчастіший вибір',
      t2V: '1 000 – 2 000 Kč',
      t2P: 'День народження, річниця, подяка. Розмір, на якому зупиняється більшість.',
      t3C: 'Авторський букет',
      t3V: 'від 2 000 Kč',
      t3P: 'Великі композиції та квіткові коробки, які видно вже від дверей.',
      order: 'Замовити',

      prT: 'Повний прайс',
      pr1: 'Букет із денної пропозиції', pr1v: 'до 1 000 Kč',
      pr2: 'Букет на замовлення', pr2v: '1 000 – 2 000 Kč',
      pr3: 'Авторський букет, квіткова коробка', pr3v: 'від 2 000 Kč',
      pr4: 'Весільний букет', pr4v: 'індивідуально',
      pr5: 'Оформлення весілля чи події', pr5v: 'індивідуально',
      pr6: 'Курс в’язання, воркшоп', pr6v: 'за запитом',
      pr7: 'Доставка по Пльзні (9–20)', pr7v: 'залежно від відстані',
      prNote: 'Точну ціну завжди підтверджуємо заздалегідь — телефоном або у формі нижче.',

      galEyebrow: 'Останні роботи',
      galTitle: 'З нашої майстерні',
      zoom: 'Збільшити фото',
      g1: 'Великий букет рожевих півонієвих троянд перед входом до квіткової крамниці',
      g2: 'Два букети блакитних гортензій, загорнуті в білий папір',
      g3: 'Наречена з весільним букетом із кремових троянд',
      g4: 'Квіткова коробка Charm of Flowers із трояндами, гортензією та герберами',
      g5: 'Букет з антуріумів, троянд і ромашок перед входом до квіткової крамниці',
      g6: 'Весільний букет із білих еустом та евкаліпта в руках нареченої',
      g7: 'Букет білих півонієвих троянд на прилавку магазину',
      g8: 'Покупчиня з букетом гербер і троянд у магазині під світловим логотипом',
      g9: 'Квіткове оформлення на столиках у косметичному салоні',
      g10: 'Великий пастельний букет із троянд і гвоздик — колаж із кадром пари з білим букетом',

      katEyebrow: 'Каталог',
      katTitle: 'Оберіть букет',
      katLede: 'Ціни орієнтовні — кожен букет оригінальний, з найсвіжішого того дня. Оберіть фото, надішліть запит — і ми відповімо.',
      chipsAria: 'Фільтр каталогу',
      chAll: 'Усі',
      chT1: 'до 1 000 Kč',
      chT2: '1 000 – 2 000 Kč',
      chT3: 'від 2 000 Kč',
      chWed: 'Весільні',
      chBox: 'Коробки та оформлення',
      kp1: 'до 1 000 Kč',
      kp2: '1 000 – 2 000 Kč',
      kp3: 'від 2 000 Kč',
      kpInd: 'індивідуально',
      katCta: 'Хочу цей',
      katNote: 'Кожен букет — оригінал: склад змінюється залежно від сезону та денної пропозиції, фото ілюстративні. Стиль і кольори завжди збережемо.',
      tagSeason: 'Сезонний',
      tagWedding: 'Весільний',
      tagBox: 'Коробка',
      tagDecor: 'Оформлення',
      kn01: 'Букет з антуріумами', kf01: 'антуріуми · троянди · ромашки',
      kn02: 'Весільний букет з еустом', kf02: 'еустоми · фрезії · евкаліпт',
      kn03: 'Білі півонієві троянди', kf03: 'кущові троянди в білому',
      kn05: 'Гортензія в білому', kf05: 'гортензія · біле пакування',
      kn06: 'Весільний букет із троянд', kf06: 'кремові троянди · фрезії',
      kn07: 'Квіткова коробка', kf07: 'троянди · гортензія · гербери · листівка',
      kn08: 'Осіння композиція зі стрічкою', kf08: 'троянди · гвоздики · евкаліпт',
      kn09: 'Півонієві троянди гранд', kf09: 'кущові півонієві троянди',
      kn10: 'Гербери та троянди', kf10: 'гербери · троянди · зелень',
      kn11: 'Соняшники', kf11: 'соняшники · дельфіній · ромашка',
      kn12: 'Квіткове оформлення простору', kf12: 'салони · кав’ярні · події',
      kn13: 'Жоржини в літньому пакуванні', kf13: 'жоржини · сезонна пропозиція',
      ka13: 'Букет помаранчевих жоржин у рожевому пакуванні зі стрічкою Charm of Flowers',
      knFl: 'Довірюсь флористці', kfFl: 'назвіть бюджет і привід — квіти оберемо ми',
      kpFl: 'за бюджетом',
      stepsEyebrow: 'Як це працює',
      stepsTitle: 'Замовлення у три кроки',
      st1T: 'Оберіть',
      st1P: 'З каталогу, з Instagram, або просто назвіть бюджет і привід — решту придумаємо.',
      st2T: 'Подзвоніть або напишіть',
      st2P: 'Телефон 723 477 375, повідомлення в Instagram або форма запиту. Узгодимо деталі й ціну.',
      st3T: 'Заберіть або доставимо',
      st3P: 'На Pražská 43, або доставка по Пльзні та околицях — дбайливо, від 30 до 60 хвилин.',
      katFormBtn: 'Надіслати запит',
      katIgBtn: 'Актуальні букети в Instagram',
      katLinkBtn: 'Переглянути каталог букетів',

      rvEyebrow: 'Що кажуть клієнти',
      rvTitle: 'Відгуки',
      rv1: '«Господиня в’яже дуже гарні букети за дуже приємними цінами.»',
      rv1src: 'відгук клієнта · Živéfirmy.cz',
      rv2: '«Елегантна крамниця, повна гарних запашних квітів.»',
      rv2src: 'відгук клієнта · Živéfirmy.cz',
      rvCta: 'Більше відгуків у Google',

      stEyebrow: 'Історія за назвою',
      stTitle: 'Квіткова крамниця, що почалася вдруге',
      stP1: 'Charm of Flowers веде <strong>Наталія Івасюк</strong>. Власну квіткову крамницю вона мала ще в Україні — доки не довелося залишити її через війну.',
      stP2: 'З чоловіком вони знайшли новий дім у Пльзні. Наталія спершу працювала в місцевій крамниці, а потім відкрила свою — з нуля і вдруге в житті.',
      stQ: 'Тому кожен наш букет має свою історію. Про сміливість почати заново — і про те, що краса вміє вирости навіть після важких випробувань.',
      stN1: 'відкриття у Пльзні',
      stN2: 'букетів в Instagram',
      stN3: 'мови за прилавком',
      stAlt: 'Флористка за прилавком магазину з двома букетами із соняшників',

      faqEyebrow: 'Перш ніж спитати',
      faqTitle: 'Часті запитання',
      q1: 'Як швидко зв’яжете букет?',
      a1: 'Подзвоніть або напишіть — домовимось, коли букет буде готовий. Для великих композицій і квіткових коробок краще день-два наперед.',
      q2: 'Чи доставляєте квіти на конкретний час?',
      a2: 'Так, розвозимо по Пльзні та околицях щодня з 9:00 до 20:00 — зазвичай за 30–60 хвилин. Час доставки бронюйте заздалегідь, ціну підтвердимо залежно від відстані.',
      q3: 'Коли звертатися щодо весільного букета?',
      a3: 'Що раніше, то краще — дати бронюємо заздалегідь. На консультації обговоримо стиль, кольори та оформлення церемонії і столів.',
      q4: 'Чи можна спілкуватися українською або англійською?',
      a4: 'Так. Спілкуємось чеською, англійською та українською — у крамниці, телефоном і в Instagram.',
      q5: 'Як проходять курси в’язання?',
      a5: 'В’яжемо у групі або індивідуально — для початківців, компаній і фірм. Актуальні дати на нашому Instagram, або напишіть нам.',

      coEyebrow: 'Де нас знайти',
      coTitle: 'Pražská 43, поруч із площею',
      coAddrT: 'Адреса',
      coAddr: 'Pražská 38/43<br>301 00 Пльзень 3 — Východní Předměstí',
      coMap: 'Відкрити на карті',
      coHoursT: 'Години роботи',
      coRow1: 'Понеділок – субота',
      coRow2: 'Неділя',
      coRow3: 'Доставка по Пльзні',
      coRow3V: 'щодня 9:00 – 20:00',
      coOrderT: 'Замовлення',
      coNote: 'Передзвонюємо й відповідаємо — телефоном, в Instagram і на Facebook.',
      coFollowT: 'Стежте за нами',
      coLinks: 'Усі посилання',
      mapTitle: 'Карта — Charm of Flowers, Pražská 38/43, Пльзень',

      fmT: 'Запит без зобов’язань',
      fmNote: 'Напишіть, що святкуєте і скільки хочете витратити. Відповімо з пропозицією — телефоном або повідомленням.',
      fmName: 'Ім’я',
      fmPhone: 'Телефон',
      fmDate: 'На коли',
      fmBudget: 'Бюджет',
      fmMsg: 'Повідомлення',
      fmMsgPh: 'Що святкуєте, які кольори любить, куди доставити…',
      fmOpt1: 'до 1 000 Kč',
      fmOpt2: '1 000 – 2 000 Kč',
      fmOpt3: 'від 2 000 Kč',
      fmOpt4: 'весілля — індивідуально',
      fmOpt5: 'ще не знаю',
      fmSend: 'Надіслати запит',
      fmOk: 'Дякуємо! Запит надіслано — відповімо якнайшвидше.',

      chatAria: 'Напишіть нам',
      chatT: 'Напишіть нам',
      chatSub: 'Відповідаємо в години роботи, зазвичай за кілька хвилин.',
      chatCall: 'Подзвонити 723 477 375',
      chatForm: 'Форма запиту',
      chatBtn: 'Напишіть нам',
      fCena: 'Ціна',
      fPrilez: 'Привід',

      ftShop: 'Магазин',
      ftContact: 'Контакти',
      ftSocial: 'Соцмережі',
      toTop: 'Нагору',

      lbAria: 'Перегляд фото',
      lbClose: 'Закрити',
      lbPrev: 'Попереднє фото',
      lbNext: 'Наступне фото',
      callBar: 'Зателефонувати'
    }
  };

  var STORE = 'cof-lang';
  var DEFAULT = 'cs';

  function pick() {
    var q = new URLSearchParams(location.search).get('lang');
    if (DICT[q]) return q;
    try {
      var saved = localStorage.getItem(STORE);
      if (DICT[saved]) return saved;
    } catch (e) { /* private mode */ }
    /* uk, ru i be čtou ukrajinskou verzi líp než českou */
    var nav = (navigator.language || '').slice(0, 2).toLowerCase();
    if (nav === 'uk' || nav === 'ru' || nav === 'be') return 'uk';
    return DEFAULT;
  }

  function meta(sel, val) {
    var el = document.querySelector(sel);
    if (el) el.setAttribute('content', val);
  }

  function apply(lang) {
    var d = DICT[lang] || DICT[DEFAULT];
    var t = function (k) { return d[k] != null ? d[k] : k; };

    document.documentElement.lang = lang === 'uk' ? 'uk' : 'cs';
    /* katalog.html má vlastní titulek — pozná se podle <body data-page> */
    var page = document.body.getAttribute('data-page');
    var titleKey = page === 'katalog' ? 'katDocTitle' : 'docTitle';
    var descKey = page === 'katalog' ? 'katDocDesc' : 'docDesc';
    document.title = t(titleKey);
    meta('meta[name="description"]', t(descKey));
    meta('meta[property="og:title"]', t(titleKey));
    meta('meta[property="og:description"]', t(descKey));
    meta('meta[property="og:locale"]', t('ogLocale'));

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      el.alt = t(el.getAttribute('data-i18n-alt'));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
    });

    /* fotky v galerii: popisek je alt, tlačítko říká i co udělá */
    document.querySelectorAll('.shot').forEach(function (b) {
      var img = b.querySelector('img');
      if (img) b.setAttribute('aria-label', t('zoom') + ': ' + img.alt);
    });

    document.querySelectorAll('.lang__b').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', String(on));
    });

    try { localStorage.setItem(STORE, lang); } catch (e) { /* nevadí */ }

    var url = new URL(location.href);
    if (lang === DEFAULT) url.searchParams.delete('lang');
    else url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);

    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('.lang__b');
    if (b) apply(b.getAttribute('data-lang'));
  });

  apply(pick());
})();
