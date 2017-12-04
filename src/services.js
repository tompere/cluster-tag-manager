export const fetchPosts = () => {
  // TODO(niv) - fetch posts from server
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve([
        { id: 1, company: "golan telecom", description: "no reception" },
        { id: 2, company: "shufersal", description: "rotten tomatoes" }
      ]);
    }, 1500)
  );
};

export const fetchClusters = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve([
        { id: 1, name: "telecommunications" },
        { id: 2, name: "food" },
        { id: 3, name: "insurance" }
      ]);
    }, 1500)
  );
};

export const tagPostWithCluster = (postId, clusterId) => {
  // TODO(niv) - update posts with selected cluster
  console.log(`🦄 tag post ${postId} with cluster ${clusterId}`);
};
