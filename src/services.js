export const fetchPosts = () => {
  // TODO(niv) - fetch posts from server
  return [
    { id: 1, company: "golan telecom", description: "no reception" },
    { id: 2, company: "shufersal", description: "rotten tomatoes" }
  ];
};

export const fetchClusters = () => {
  // TODO(niv) - fetch clusters options from server
  return [
    { id: 1, name: "telecommunications" },
    { id: 2, name: "food" },
    { id: 3, name: "insurance" }
  ];
};

export const tagPostWithCluster = (postId, clusterId) => {
  // TODO(niv) - fetch clusters options from server
  console.log(`🦄 tag post ${postId} with cluster ${clusterId}`);
};
