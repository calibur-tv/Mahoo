export const getUserMessage = ({ axios, getter_slug, message_type, since_id, is_up, count }) => {
  return axios.$get('v1/message/history', {
    params: { getter_slug, message_type, since_id, count, is_up }
  })
}
