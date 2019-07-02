export const getUserMessage = ({ $axios, channel, since_id, is_up, count }) => {
  return $axios.$get('v1/message/history', {
    params: { channel, since_id, count, is_up }
  })
}

export const getUserRelation = ({ $axios, seen_ids, slug, relation }) => {
  return $axios.$get('v1/user/relation', {
    params: { seen_ids, slug, relation }
  })
}

export const getUserDrafts = ({ $axios, page, count }) => {
  return $axios.$get('v1/pin/drafts', {
    params: { page, count }
  })
}

export const getUserTimeline = ({ $axios, page, count, slug }) => {
  return new Promise((resolve, reject) => {
    $axios.$get('v1/user/timeline', {
      params: { page, count, slug }
    })
      .then(data => {
        resolve({
          result: data,
          total: 0,
          no_more: data.length < count
        })
      })
      .catch(reject)
  })
}
