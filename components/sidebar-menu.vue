<template>
  <div class="sidebar-menu">
    <!--    categories />-->
    <ul role="tablist"
        class="sb-categories">
      <li v-for="(category, index) in categories"
          :key="index"
          no-body
          class="sb-categories__item">
        <div class="sb-categories__accordion">
          <nuxt-link :to="'/catalog/' + `${category.url}`">
            <p class="mb-0"> {{ category.name }} </p>
          </nuxt-link>
          <div @click="categoryId = category.category_id"
               class="sb-categories__arrow-wrapper">
            <svg
              v-b-toggle="'accordion-' + index"
              class="sb-categories__arrow"
              block
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24">
              <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/>
            </svg>
          </div>
        </div>
        <b-collapse :id="'accordion-' + index"
                    :visible="selectedCategory === category.category_id"
                    accordion="category-accordion"
                    role="tabpanel">
          <!--  subcategory  -->
          <ul role="sub-tablist"
              class="sb-subcategories">
            <li v-for="(subcategory, index) in subCategories"
                :key="index"
                class="sb-subcategories__item">
              <div class="sb-subcategories__accordion">
                <nuxt-link :to="'/catalog/' + `${subcategory.url}`">
                  <p class="mb-0"> {{ subcategory.name }} </p>
                </nuxt-link>
                <div @click="subCategoryId = subcategory.category_id"
                     class="sb-subcategories__arrow-wrapper">
                  <svg
                    v-b-toggle="'accordion-' + subcategory.category_id"
                    class="sb-subcategories__arrow"
                    block
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="14"
                    viewBox="0 0 24 19">
                    <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/>
                  </svg>
                </div>
              </div>
              <b-collapse :id="'accordion-' + subcategory.category_id"
                          :visible="selectedSubCategory === subcategory.category_id"
                          accordion="sub-category-accordion"
                          role="tabpanel">
                <!-- last categories  -->
                <ul class="sb-last-categories">
                  <li v-for="(lastCategory, index) in lastCategories"
                      :key="index"
                      class="sb-last-categories__item"
                  :class="{'sb-last-categories__item--active': selectedLastCategory.category_id === lastCategory.category_id}">
                    <nuxt-link :to="'/catalog/' + `${lastCategory.url}`">
                      <p class="mb-0">
                        {{ lastCategory.name }}
                      </p>
                    </nuxt-link>
                  </li>
                </ul>
              </b-collapse>
            </li>
          </ul>
        </b-collapse>
      </li>
    </ul>
  </div>
</template>

<script>
  import accordion from "./accordion";
  import {mapState, mapGetters} from 'vuex';

  export default {
    components: {
      accordion
    },
    data: () => ({
      shows: [true, false, false],
      categoryId: null,
      subCategoryId: null,
    }),
    computed: {
      categories() {
        return this.$store.getters.FILTERED_CATEGORIES(null)
      },
      subCategories() {
        return this.categoryId ? this.$store.getters.FILTERED_CATEGORIES(this.categoryId)
          : this.$store.getters.FILTERED_CATEGORIES(this.selectedCategory)
      },
      lastCategories() {
        return this.subCategoryId ? this.$store.getters.FILTERED_CATEGORIES(this.subCategoryId)
          : this.$store.getters.FILTERED_CATEGORIES(this.selectedLastCategory.parent_id)
      },
      selectedCategory() {
        let result = '';
        if (this.$store.getters.SET_CHECKED_URL_CATEGORIES[0]) {
          result = this.$store.getters.SET_CHECKED_URL_CATEGORIES[0].category_id
        }
        return result
      },
      selectedSubCategory() {
        let result = '';
        if (this.$store.getters.SET_CHECKED_URL_CATEGORIES[1]) {
          result = this.$store.getters.SET_CHECKED_URL_CATEGORIES[1].category_id
        }
        return result
      },
      selectedLastCategory() {
        let result = '';
        if (this.$store.getters.SET_CHECKED_URL_CATEGORIES[2]) {
          result = this.$store.getters.SET_CHECKED_URL_CATEGORIES[2]
        }
        return result
      }
    },
    created() {
      this.$store.dispatch('SET_CATEGORIES')
    },
  }
</script>

<style lang="sass">
  .sidebar-menu
    position: fixed
    bottom: -40px
    left: 0
    padding: 10px 0 40px 0
    height: 100%
    width: 100%
    max-width: 330px
    overflow: auto

    a
      color: #35495e

    .sb-categories

      &__item
        width: 100%

      &__accordion
        display: flex
        align-items: center
        justify-content: space-between
        padding: 9px 6px 9px 10px
        width: 100%

        &:hover
          background: #edf2f7

        p
          font-size: 16px
          line-height: 19px
          text-align: left

      &__arrow
        position: relative
        flex-shrink: 0
        transition: .2s linear

        &-wrapper
          display: flex
          align-items: center
          justify-content: center
          flex-shrink: 0
          margin-left: 10px
          transform: rotate(180deg)

        &.collapsed
          transform: rotate(0deg)

    .sb-subcategories
      width: 100%

      &__item
        width: 100%

      &__arrow
        transform: rotate(0deg)

        &.collapsed
          transform: rotate(180deg)

        &-wrapper
          display: flex
          flex-shrink: 0
          align-items: center
          justify-content: center
          width: 30px

      &__accordion
        display: flex
        align-items: center
        justify-content: space-between
        padding: 10px 3px 10px 20px
        background: #edf2f7
        width: 100%

        &:hover
          background: darken(#edf2f7, 6%)

        p
          font-size: 14px
          line-height: 17px
          text-align: left

    .sb-last-categories
      background: darken(#edf2f7, 6%)

      &__item
        padding: 6px 10px 6px 20px

        &:hover
          background: darken(#edf2f7, 10%)

        &--active
          background: darken(#edf2f7, 10%)


        p
          font-size: 14px
          line-height: 17px
          text-align: left

</style>

