export const createQA = (ctx, { tag_slug, title, answers, right_index }) => ctx.$axios.$post('v1/atfield/create', { tag_slug, title, answers, right_index })
