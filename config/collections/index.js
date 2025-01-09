/** All blog posts as a collection. */
const getAllPosts = collection => {
  const projects = collection.getFilteredByGlob('./src/posts/*.md');
  return projects.reverse();
};

/** All news/jobs posts as a collection. */
const getAllNewsAndJobs = collection => {
  const news = collection.getFilteredByGlob('./src/news/*.md');
  return news.reverse();
};

/** All news posts with type!=jobas a collection. */
const getAllNews = collection => {
  const news = collection.getFilteredByGlob('./src/news/*.md').filter(p => p.data.type != 'job');
  return news.reverse();
};

/** All news posts with type=job as a collection. */
const getAllJobs = collection => {
  const jobs = collection.getFilteredByGlob('./src/news/*.md').filter(p => p.data.type == 'job');
  return jobs.reverse();
};

/** All gallery items as a collection. */
const getAllGalleryItems = collection => {
  const items = collection.getFilteredByGlob('./src/gallery/*.md');
  return items.sort((a, b) => {
    let aPrio = a.data.prio == undefined ? 500 : a.data.prio;
    let bPrio = b.data.prio == undefined ? 500 : b.data.prio;
    return aPrio - bPrio;
  });
};

/** All future events. */
const getFutureEvents = collection => {
  const now = new Date();
  const events = collection.getFilteredByGlob('./src/conferences/*/*.md').filter(p => p.data.date >= now);
  return events.reverse();
};

/** All past events. */
const getPastEvents = collection => {
  const now = new Date();
  const events = collection.getFilteredByGlob('./src/conferences/*/*.md').filter(p => p.data.date < now);
  return events.reverse();
};


/** All markdown files as a collection for sitemap.xml */
const onlyMarkdown = collection => {
  return collection.getFilteredByGlob('./src/**/*.md');
};

module.exports = {
  getAllPosts,
  getAllNewsAndJobs,
  getAllNews,
  getAllJobs,
  getAllGalleryItems,
  getPastEvents,
  getFutureEvents,
  onlyMarkdown
};
