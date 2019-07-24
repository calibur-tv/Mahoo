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
  return $axios.$get('v1/user/timeline', {
    params: { page, count, slug }
  })
}

export const getPinComments = ({ $axios, sort, slug, count, last_id, seen_ids, mode, page }) => {
  return $axios.$get('v1/comment/list', {
    params: { sort, slug, count, last_id, seen_ids, mode, page }
  })
}

export const getTagFlows = ({ $axios, slug, sort, time, take, seen_ids, last_id }) => {
  const timeout = () => new Promise(resolve => setTimeout(resolve, 400))
  const request = () => $axios.$get('v1/flow/pins', {
    params: {
      slug, sort, time, take, is_up: 0, spec_id: sort === 'newest' ? last_id : seen_ids
    }
  })
  return new Promise((resolve, reject) => {
    Promise.all([request(), timeout()])
      .then(data => {
        resolve(data[0])
      })
      .catch(reject)
  })
}

export const getATField = ({ $axios, page, count, sort, slug }) => {
  const timeout = () => new Promise(resolve => setTimeout(resolve, 400))
  const request = () => $axios.$get('v1/atfield/flow', {
    params: { page, count, sort, slug }
  })
  return new Promise((resolve, reject) => {
    Promise.all([request(), timeout()])
      .then(data => {
        resolve(data[0])
      })
      .catch(reject)
  })
}

export const getZoneQuestions = ({ $axios, slug }) => {
  return $axios.$get('v1/atfield/list', {
    params: { slug }
  })
}
