export const show = (ctx, { slug }) => ctx.$axios.get('v1/tag/show', {
  params: { slug }
})

export const create = (ctx, { name, parent_slug }) => ctx.$axios.post('v1/tag/create', { name, parent_slug })
