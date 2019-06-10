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
