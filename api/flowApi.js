export const getUserMessage = ({ $axios, channel, since_id, is_up, count }) => {
  return $axios.$get('v1/message/history', {
    params: { channel, since_id, count, is_up }
  })
}
