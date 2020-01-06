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
  const request = () =>
    $axios.$get('v1/flow/pins', {
      params: {
        slug,
        sort,
        time,
        take,
        is_up: 0,
        spec_id: sort === 'newest' ? last_id : seen_ids
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
  const request = () =>
    $axios.$get('v1/atfield/flow', {
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

export const getMixinSearch = ({ $axios, page, type, q }) => {
  return $axios.$get('v1/search/mixin', {
    params: { page, type, q }
  })
}

export const getTimeline = ({ $axios, type, slug }) => {
  return $axios.$get(`v1/${type}/timeline`, {
    params: { slug }
  })
}

export const getFlowRecommendedIndex = ({ $axios, seen_ids }) => {
  return $axios.$get('v1/flow/index', {
    params: { seen_ids }
  })
}

export const tagHottest = ({ $axios, page, take }) =>
  $axios.$get('v1/tag/hottest', {
    params: { page, take }
  })

export const getBangumiQuestionTrials = ({ $axios, page, take, bangumi_slug, user_slug, status, sort }) => {
  return $axios.$get('v1/join/flow', {
    params: {
      page,
      take,
      bangumi_slug,
      user_slug,
      status,
      sort
    }
  })
}

export const getIdolFans = ({ $axios, page, take, slug, sort }) => {
  return $axios.$get('v1/idol/fans', {
    params: {
      page,
      take,
      slug,
      sort
    }
  })
}

export const getBangumiLiker = ({ $axios, page, take, slug }) => {
  return $axios.$get('v1/bangumi/liker', {
    params: {
      page,
      take,
      slug
    }
  })
}
