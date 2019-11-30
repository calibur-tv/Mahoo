<style lang="scss">
.search-input-wrap {
  position: relative;

  .search-input-btn {
    float: right;
    height: 100%;
  }

  .search-input-text {
    overflow: hidden;
    height: 100%;

    input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      outline: none;
      border: none;
    }
  }

  .search-suggestions {
    position: absolute;
    z-index: 999;
    max-height: 200px;
    overflow-y: scroll;

    &:hover {
      display: block !important;
    }

    li {
      cursor: pointer;
      height: 40px;
      padding: 5px 0;

      img {
        height: 30px;
        width: 30px;
        border-radius: 3px;
        vertical-align: middle;
        margin-left: 10px;
        margin-right: 8px;
      }
    }
  }
}
</style>

<template>
  <form :class="`search-${state}`" action="#" method="get" class="search-input-wrap" @submit.prevent="submit">
    <button type="submit" class="search-input-btn">
      <slot name="submit-btn">
        <i class="iconfont ic-search" />
      </slot>
    </button>
    <div class="search-input-text">
      <input
        v-model.trim="word"
        :placeholder="placeholder"
        :autofocus="autofocus"
        class="search-input"
        type="text"
        name="q"
        aria-autocomplete="both"
        aria-haspopup="false"
        autocapitalize="off"
        autocomplete="off"
        autocorrect="off"
        role="combobox"
        spellcheck="false"
        maxlength="50"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
      />
    </div>
    <ul v-show="displaySuggestion" class="search-suggestions">
      <NLink v-for="(item, index) in filteredSelect" :key="item.id" :class="{ active: index === selectedIndex }" :to="$alias.tag(item.slug)" tag="li">
        <img :src="$resize(item.avatar, { width: 60 })" />
        <span v-text="item.name" />
      </NLink>
    </ul>
  </form>
</template>

<script>
export default {
  name: 'VSearchInput',
  props: {
    placeholder: {
      type: String,
      default: '搜索'
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'all'
    },
    showSuggestion: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      word: this.value,
      selectedType: this.type,
      state: this.autofocus ? 'focus' : 'blur',
      typing: false,
      filteredSelect: [],
      selectedIndex: -1,
      tags: []
    }
  },
  computed: {
    displaySuggestion() {
      return this.state === 'focus' && this.showSuggestion && this.word && this.word.length && this.typing && this.filteredSelect.length
    }
  },
  mounted() {
    this.$watch('value', val => {
      this.word = val
      this.typing = true
      this.selectedIndex = -1
      this.handleEnter(val)
    })
    this.$watch('word', val => {
      this.$emit('input', val)
    })
    this.$watch('$route', val => {
      if (val.name === 'search') {
        this.word = val.query.q
        this.selectedType = val.query.type
        setTimeout(() => {
          this.typing = false
        }, 0)
      }
    })
    this.getSearchTags()
  },
  methods: {
    getSearchTags() {
      if (!this.showSuggestion) {
        return
      }
      this.$nextTick(() => {
        const cacheKey = 'search-all-tags'
        if (this.$cache.expired(cacheKey, 86400)) {
          this.$axios
            .$get('v1/search/tags')
            .then(tags => {
              this.tags = tags
              this.$cache.set(cacheKey, tags)
              if (this.word) {
                this.handleEnter(this.word)
                if (this.filteredSelect.length) {
                  this.handleInputFocus()
                  this.typing = true
                }
              }
            })
            .catch(() => {})
        } else {
          this.tags = this.$cache.get(cacheKey)
        }
      })
    },
    submit() {
      const q = this.selectedIndex !== -1 ? this.filteredSelect[this.selectedIndex].name.trim() : this.word.trim()
      if (!q) {
        return
      }
      this.$channel.$emit('search-action', {
        text: q,
        type: this.selectedType
      })
      this.$router.push({
        name: 'search',
        query: { q, type: this.selectedType }
      })
    },
    handleEnter(query) {
      if (!query) {
        this.filteredSelect = []
        return
      }
      this.filteredSelect = this.tags.filter(option => {
        return option.alias.includes(query) || option.name.includes(query)
      })
    },
    handleInputFocus() {
      this.state = 'focus'
      this.$emit('focus')
    },
    handleInputBlur() {
      this.state = 'blur'
      this.$emit('blur')
    }
  }
}
</script>
