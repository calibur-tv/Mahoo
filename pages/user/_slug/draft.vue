<template>
  <div id="user-draft">
    <flow-loader
      func="getUserDrafts"
      type="page"
      :query="{
        count: 10,
        $axios: $axios
      }"
    >
      <ul slot-scope="{ flow, extra }">
        <li v-for="(item, index) in flow" :key="item.slug">
          <nuxt-link target="_blank" :to="$alias.pin(extra[index])">
            {{ item.title.text }}
          </nuxt-link>
        </li>
      </ul>
    </flow-loader>
  </div>
</template>

<script>
import mustSelf from '~/mixins/mustSelf'
import mustSign from '~/mixins/mustSign'

export default {
  name: 'UserDraft',
  mixins: [mustSign, mustSelf],
  props: {
    slug: {
      type: String,
      required: true
    }
  }
}
</script>
