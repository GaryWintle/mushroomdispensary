// Press coverage + video coverage for the /news page.
// Edit this file to add, remove, or re-order stories — the page, the year
// filter, and the structured data all derive from these arrays.

export interface NewsItem {
  /** Headline as published. */
  title: string;
  /** Outbound link to the article. */
  url: string;
  /** Publication name, shown as the card eyebrow. */
  source: string;
  /** Human-readable date, e.g. "Aug 28, 2024". */
  date: string;
  /** Machine date for <time datetime>, e.g. "2024-08-28" or "2024-08". */
  datetime: string;
  /** Year string — drives the filter strip. */
  year: string;
  /** Set true on a single story to show it as the full-width hero card. */
  featured?: boolean;
  /** Optional pull-quote / summary shown only on the featured hero card. */
  blurb?: string;
}

export interface NewsVideoItem {
  /**
   * YouTube video ID (the part after `watch?v=`). Leave "" to show an empty
   * "coming soon" slot. e.g. for https://youtu.be/dQw4w9WgXcQ use "dQw4w9WgXcQ".
   */
  youtubeId: string;
  /** Headline / description of the clip. */
  title: string;
  /** Broadcaster / publication. */
  source: string;
  /** Human-readable date, e.g. "Nov 2023". */
  date: string;
  /** Machine date for sorting / structured data, e.g. "2023-11-01". */
  datetime: string;
}

// --- VIDEO NEWS STORIES --------------------------------------------------
// Four slots at the top of the page. Fill in `youtubeId` (and the title /
// source / date) for each clip you want to feature. Empty slots render a
// tasteful "coming soon" placeholder until you add a link.
export const newsVideos: NewsVideoItem[] = [
  {
    youtubeId: "stopsPoOX-4",
    title:
      "Vancouver city councillors reinstate mushroom dispensary's business license",
    source: "CityNews",
    date: "Mar 2024",
    datetime: "2024-03-06",
  },
  {
    youtubeId: "X_ci6hUYPiU",
    title:
      "'The reaction has been hysteria': drug policy reform activist on sending magic mushrooms to MLAs",
    source: "CBC News",
    date: "Jan 2024",
    datetime: "2024-01-04",
  },
  {
    youtubeId: "OBFM87RW8KE",
    title: "Magic mushroom packages anger B.C. MLA",
    source: "CityNews",
    date: "Jan 2024",
    datetime: "2024-01-03",
  },
  {
    youtubeId: "uzEbKYUQ2rM",
    title:
      "Mushroom, illicit drug dispensary owner released after Vancouver police raids",
    source: "CityNews",
    date: "Nov 2023",
    datetime: "2023-11-01",
  },
];

// --- PRINT / ONLINE COVERAGE ---------------------------------------------
// Newest first. Exactly one item should carry `featured: true`.
export const news: NewsItem[] = [
  {
    title:
      "Vancouver magic mushroom dispensary gets business licence re-instated",
    url: "https://www.ctvnews.ca/vancouver/article/vancouver-magic-mushroom-dispensary-gets-business-licence-re-instated/",
    source: "CTV News",
    date: "Nov 20, 2024",
    datetime: "2024-11-20",
    year: "2024",
  },
  {
    title:
      "Court Rules Psychedelic Mushroom Dispensary Can Remain Open in Vancouver",
    url: "https://doubleblindmag.com/vancouver-mushroom-dispensary-wins/",
    source: "DoubleBlind",
    date: "Sept 12, 2024",
    datetime: "2024-09-12",
    year: "2024",
  },
  {
    title:
      "Court rules against City of Vancouver in mushroom dispensary crackdown",
    url: "https://www.cbc.ca/news/canada/british-columbia/suspected-mushroom-dispensary-court-decision-1.7306210",
    source: "CBC News",
    date: "Aug 28, 2024",
    datetime: "2024-08-28",
    year: "2024",
    featured: true,
    // blurb:
    //   "After the November raids, a B.C. judge ruled the City of Vancouver had failed to prove the dispensary sold psilocybin — a landmark decision that kept the doors open and made national headlines.",
  },
  {
    title: "Vancouver mushroom dispensary back open after winning court ruling",
    url: "https://globalnews.ca/news/10724342/vancouver-mushroom-dispensary-court-ruling/",
    source: "Global News",
    date: "Aug 28, 2024",
    datetime: "2024-08-28",
    year: "2024",
  },
  {
    title: "Court rules against Vancouver in mushroom dispensary crackdown",
    url: "https://ca.news.yahoo.com/court-rules-against-vancouver-mushroom-110000308.html",
    source: "Yahoo News",
    date: "Aug 28, 2024",
    datetime: "2024-08-28",
    year: "2024",
  },
  {
    title:
      "No magic at city council for Vancouver mushroom dispensaries as retail framework rejected",
    url: "https://globalnews.ca/news/10414859/magic-mushroom-vancouver-retail/",
    source: "Global News",
    date: "Apr 11, 2024",
    datetime: "2024-04-11",
    year: "2024",
  },
  {
    title:
      "Vancouver's chief licence inspector orders magic mushroom dispensary to close",
    url: "https://www.squamishchief.com/bc-news/vancouvers-chief-licence-inspector-orders-magic-mushroom-dispensary-to-close-8642412",
    source: "Squamish Chief",
    date: "Apr 2024",
    datetime: "2024-04",
    year: "2024",
  },
  {
    title: "Vancouver re-instates magic mushroom shop's business licence",
    url: "https://dailyhive.com/vancouver/psilocybin-business-licence-hearing",
    source: "Daily Hive",
    date: "Mar 6, 2024",
    datetime: "2024-03-06",
    year: "2024",
  },
  {
    title: "Vancouver magic mushroom dispensary gets business licence back",
    url: "https://globalnews.ca/news/10339230/vancouver-magic-mushroom-dispensary-licence-back",
    source: "Global News",
    date: "Mar 6, 2024",
    datetime: "2024-03-06",
    year: "2024",
  },
  {
    title:
      "Drug activist draws flak for sending magic mushrooms, coca leaf to B.C. MLAs",
    url: "https://www.cbc.ca/news/canada/british-columbia/bc-mlas-receive-mushrooms-in-the-mailbox-1.7073913",
    source: "CBC News",
    date: "Jan 2024",
    datetime: "2024-01",
    year: "2024",
  },
  {
    title:
      "MLA outraged by 'gift' of magic mushrooms, coca leaf from B.C. drug activist",
    url: "https://globalnews.ca/news/10200006/bc-drug-activist-magic-mushrooms/",
    source: "Global News",
    date: "Jan 2024",
    datetime: "2024-01",
    year: "2024",
  },
  {
    title:
      "Drug activist's Christmas gift of magic mushrooms, coca leaf rankles B.C. MLAs",
    url: "https://vancouversun.com/news/local-news/drug-activist-dana-larsens-christmas-gift-of-magic-mushrooms-coca-leaf-rankles-mlas",
    source: "Vancouver Sun",
    date: "Jan 2024",
    datetime: "2024-01",
    year: "2024",
  },
  {
    title: "A New Drug Testing Location Opens Near Vancouver City Hall",
    url: "https://thetyee.ca/News/2023/12/07/New-Drug-Testing-Location/",
    source: "The Tyee",
    date: "Dec 2023",
    datetime: "2023-12-07",
    year: "2023",
  },
  {
    title:
      "Meet the 'magic' mushroom shop salesman hoping to demolish Canada's war on drugs",
    url: "https://www.salon.com/2023/12/06/meet-the-magic-mushroom-shop-salesman-hoping-to-demolish-canadas-on/",
    source: "Salon",
    date: "Dec 2023",
    datetime: "2023-12-06",
    year: "2023",
  },
  {
    title:
      "Magic mushroom dispensaries raided, owner arrested as Vancouver Police pivot focus from street drugs",
    url: "https://www.theglobeandmail.com/canada/article-magic-mushroom-dispensaries-raided-owner-arrested-as-vancouver-police/",
    source: "Globe and Mail",
    date: "Nov 2023",
    datetime: "2023-11",
    year: "2023",
  },
  {
    title:
      "'Very unexpected': Vancouver police raid Dana Larsen's magic mushroom dispensaries",
    url: "https://bc.ctvnews.ca/very-unexpected-vancouver-police-raid-dana-larsen-s-magic-mushroom-dispensaries-1.6627117",
    source: "CTV News",
    date: "Nov 2023",
    datetime: "2023-11",
    year: "2023",
  },
  {
    title:
      "Mushroom, illicit drug dispensary owner released after Vancouver police raids",
    url: "https://vancouver.citynews.ca/2023/11/01/vancouver-mushroom-dispensary-drug/",
    source: "CityNews",
    date: "Nov 2023",
    datetime: "2023-11-01",
    year: "2023",
  },
  {
    title:
      "Vancouver tries to strip mushroom dispensaries of business licences",
    url: "https://dailyhive.com/vancouver/vancouver-mushroom-dispensaries-business-licences",
    source: "Daily Hive",
    date: "Oct 2023",
    datetime: "2023-10",
    year: "2023",
  },
  {
    title:
      "Could Canada legalize magic mushrooms? We asked federal parties their stance",
    url: "https://dailyhive.com/canada/federal-parties-stance-legalization-psilocybin-mushrooms",
    source: "Daily Hive",
    date: "Oct 2023",
    datetime: "2023-10",
    year: "2023",
  },
  {
    title: "How Ramping Up Drug Testing Could Save Lives",
    url: "https://thetyee.ca/News/2023/10/05/Ramping-Drug-Testing-Could-Save-Lives/",
    source: "The Tyee",
    date: "Oct 2023",
    datetime: "2023-10-05",
    year: "2023",
  },
  {
    title:
      "B.C., the Wild West of psilocybin, has magic mushroom options for everyone",
    url: "https://vancouversun.com/news/local-news/bc-the-wild-west-of-psilocybin-with-options-for-everyone",
    source: "Vancouver Sun",
    date: "Apr 2023",
    datetime: "2023-04",
    year: "2023",
  },
  {
    title: "Anger over Vancouver mushroom dispensary at legislature",
    url: "https://bc.ctvnews.ca/company-s-cocaine-approval-claim-fuels-vancouver-dispensary-outrage-1.6297254",
    source: "CTV News",
    date: "Mar 2023",
    datetime: "2023-03",
    year: "2023",
  },
  {
    title:
      "Magic mushroom stores are popping up in Vancouver, hoping to open the doors to legalization",
    url: "https://www.theglobeandmail.com/canada/british-columbia/article-magic-mushroom-stores-vancouver/",
    source: "Globe and Mail",
    date: "Feb 2023",
    datetime: "2023-02",
    year: "2023",
  },
  {
    title:
      "'I have not taken all the mushrooms on the menu' — inside a Vancouver magic mushroom store",
    url: "https://www.vancouverisawesome.com/local-news/magic-mushrooms-vancouver-store-2023-6561734",
    source: "Vancouver Is Awesome",
    date: "Feb 18, 2023",
    datetime: "2023-02-18",
    year: "2023",
  },
  {
    title:
      "In defiance of federal drug law, mushroom dispensaries are popping up across North America",
    url: "https://www.salon.com/2022/12/06/in-defiance-of-law-mushroom-dispensaries-are-popping-up-across-north-america/",
    source: "Salon",
    date: "Dec 2022",
    datetime: "2022-12-06",
    year: "2022",
  },
  {
    title: "Vancouver on the leading edge of a 'shroom boom'",
    url: "https://www.straight.com/news/get-well-shroom",
    source: "Georgia Straight",
    date: "Nov 2022",
    datetime: "2022-11",
    year: "2022",
  },
  {
    title:
      "Vancouver mushroom dispensaries continue to operate in legal grey area",
    url: "https://mugglehead.com/vancouver-mushroom-dispensaries-continue-to-operate-in-legal-grey-area/",
    source: "Mugglehead",
    date: "Oct 2022",
    datetime: "2022-10",
    year: "2022",
  },
  {
    title: "The 'shroom boom': How B.C. has adapted to the psilocybin movement",
    url: "https://biv.com/article/2022/09/shroom-boom-how-bc-has-adapted-psilocybin-movement",
    source: "Business in Vancouver",
    date: "Sept 2022",
    datetime: "2022-09",
    year: "2022",
  },
  {
    title:
      "Shroom boom? Psilocybin mushroom dispensaries sprouting up in Vancouver",
    url: "https://bc.ctvnews.ca/shroom-boom-psilocybin-mushroom-dispensaries-sprouting-up-in-vancouver-1.5913494",
    source: "CTV News",
    date: "May 2022",
    datetime: "2022-05",
    year: "2022",
  },
  {
    title:
      "Dispensaries selling illegal magic mushrooms in Vancouver could lead to legalization",
    url: "https://www.businessinsider.com/vancouver-activist-store-owner-sells-illegal-magic-mushrooms-2022-4",
    source: "Business Insider",
    date: "Apr 2022",
    datetime: "2022-04",
    year: "2022",
  },
  {
    title:
      "Vancouver dispensaries hope to spur legalization by selling magic mushrooms",
    url: "https://vancouversun.com/news/local-news/vancouver-dispensaries-hope-to-spur-legalization-by-selling-magic-mushrooms",
    source: "Vancouver Sun",
    date: "Apr 2022",
    datetime: "2022-04",
    year: "2022",
  },
  {
    title: "Magic mushroom dispensaries operating openly in Vancouver",
    url: "https://www.cbc.ca/news/canada/british-columbia/magic-mushroom-dispensaries-in-vancouver-1.6385792",
    source: "CBC News",
    date: "Mar 2022",
    datetime: "2022-03",
    year: "2022",
  },
  {
    title: "Why magic mushroom dispensaries are popping up around Vancouver",
    url: "https://dailyhive.com/vancouver/mushroom-dispensaries-psilocybin-vancouver",
    source: "Daily Hive",
    date: "Nov 2021",
    datetime: "2021-11",
    year: "2021",
  },
  {
    title:
      "B.C. health researchers harness the 'magic' of psychedelic mushrooms",
    url: "https://www.cbc.ca/news/canada/british-columbia/b-c-companies-psychedelics-mental-health-1.6070510",
    source: "CBC News",
    date: "Jun 2021",
    datetime: "2021-06",
    year: "2021",
  },
  {
    title:
      "Dana Larsen gave out free 'magic mushrooms' in Vancouver to celebrate 4/20",
    url: "https://www.vancouverisawesome.com/local-news/dana-larsen-gave-out-free-magic-mushrooms-in-vancouver-to-celebrate-420-3651159",
    source: "Vancouver Is Awesome",
    date: "Apr 2021",
    datetime: "2021-04",
    year: "2021",
  },
  {
    title: "Canadians Can Now Order Shrooms From This Dispensary",
    url: "https://www.vice.com/en/article/mb8wkp/canadians-can-now-order-shrooms-from-a-dispensary",
    source: "VICE",
    date: "Jul 2019",
    datetime: "2019-07",
    year: "2019",
  },
  {
    title: "Could magic mushrooms be the next drug legalized in Canada?",
    url: "https://ca.news.yahoo.com/could-magic-mushrooms-be-the-next-drug-canada-legalizes-171728039.html",
    source: "Yahoo News",
    date: "Jul 2019",
    datetime: "2019-07",
    year: "2019",
  },
  {
    title: "Vancouver drug advocate launches online magic mushroom dispensary",
    url: "https://bc.ctvnews.ca/vancouver-drug-advocate-launches-online-magic-mushroom-dispensary-1.4484501",
    source: "CTV News",
    date: "Jun 2019",
    datetime: "2019-06",
    year: "2019",
  },
  {
    title: "New Online Shrooms Store Hopes To Follow In Footsteps Of Cannabis",
    url: "https://www.huffpost.com/entry/magic-mushrooms-online-store-legalization_n_6108750ce4b0497e67027459",
    source: "HuffPost",
    date: "Jun 2019",
    datetime: "2019-06",
    year: "2019",
  },
];
