export const showTag = (ctx, { slug }) => ctx.$axios.get('v1/tag/show', {
  params: { slug }
})

export const createTag = (ctx, { name, parent_slug }) => ctx.$axios.post('v1/tag/create', { name, parent_slug })

export const updateTag = (ctx, { name, slug, avatar }) => ctx.$axios.post('v1/tag/update', { name, slug, avatar })

export const relinkTag = (ctx, { slug, target_slug }) => ctx.$axios.post('v1/tag/relink', { slug, target_slug })

export const deleteTag = (ctx, { slug }) => ctx.$axios.post('v1/tag/delete', { slug })
