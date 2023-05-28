<template lang="pug">
  .container.distance
    //- header-component
    .catalog
        h1 Каталог
        .sort
          div
            label Пошук:
            input(type="text" v-model="searchTerm" placeholder="Пошук")
          div.distance
            label(for="sortDirection") Сортування:
            select(id="sortDirection" v-model="sortDirection")
                option(value="asc") За зростанням
                option(value="desc") За спаданням
    .catalog--block
      .catalog--block-sort
        .catalog--block-category 
          a Всі категорії
          a Новинки
          a Роспродаж
          div.catalog--block-sort-input
            input(type="checkbox" v-model="selectedCategories" value="Сукні") 
            label Сукні
          div.catalog--block-sort-input
            input(type="checkbox") 
            label Юбки
          div.catalog--block-sort-input
            input(type="checkbox" v-model="selectedCategories" value="Блузи") 
            label Блузи
          div.catalog--block-sort-input
            input(type="checkbox" v-model="selectedCategories" value="Футболки") 
            label Футболки, топи
          div.catalog--block-sort-input
            input(type="checkbox" v-model="selectedCategories" value="Кардигани") 
            label Кардигани
          div.catalog--block-sort-input
            input(type="checkbox") 
            label Джинси
          div.catalog--block-sort-input
            input(type="checkbox") 
            label Комбінезони
          div.catalog--block-sort-input
            input(type="checkbox" v-model="selectedCategories" value="Костюми") 
            label Костюми
          div.catalog--block-sort-input.distance
            input(type="checkbox" v-model="selectedCategories" value="Пальто") 
            label Пальто, плащі, куртки
          a Вартість
            div
              label(for="minPrice") Від:
              input(type="text" id="minPrice" v-model="minPrice")
            div
              label(for="maxPrice") До:
              input(type="text" id="maxPrice" v-model="maxPrice")
            button(type="button" @click="clearFilters") Очистити фільтр
      .catalog__list
        CatalogItemComp(
            v-for="product in paginatedProducts"
            :key="product.article"
            :product_data="product"
            @addToCart="addToCart"
            )
    .pagination
          button(
            v-for="(page, pageIndex) in totalPages"
            :key="pageIndex"
            @click="changePage(pageIndex)"
            :class="{ active: currentPage === pageIndex }"
          ) {{ page }}
</template>
<script>
import CatalogItemComp from "@/components/CatalogItemComp.vue";
import HeaderComponent from "./HeaderComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CatalogComponent",
  components: {
    CatalogItemComp,
    HeaderComponent,
  },
  data() {
    return {
      selectedCategories: [],
      sortType: "price",
      sortDirection: "asc",
      minPrice: "",
      maxPrice: "",
      show: true,
      addedProduct: null,
      searchTerm: "",
      currentPage: 0,
      itemsPerPage: 6,
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),

    sortedProducts() {
      let products = [...this.PRODUCTS];
      if (this.searchTerm) {
        const searchTerm = this.searchTerm.toLowerCase();
        products = products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm)
        );
      }
      if (this.selectedCategories.length > 0) {
        products = products.filter((product) =>
          this.selectedCategories.includes(product.category)
        );
      }

      if (this.minPrice) {
        products = products.filter(
          (product) => product.price >= Number(this.minPrice)
        );
      }

      if (this.maxPrice) {
        products = products.filter(
          (product) => product.price <= Number(this.maxPrice)
        );
      }

      if (this.sortType === "price") {
        products.sort((a, b) =>
          this.sortDirection === "asc" ? a.price - b.price : b.price - a.price
        );
      } else {
        products.sort((a, b) =>
          this.sortDirection === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );
      }

      return products;
    },
    totalPages() {
      if (this.sortedProducts) {
        return Math.ceil(this.sortedProducts.length / this.itemsPerPage);
      }
      return 0;
    },
    paginatedProducts() {
      const startIndex = this.currentPage * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.sortedProducts.slice(startIndex, endIndex);
    },
  },
  methods: {
    // filterProducts() {
    //   // Logic for filtering products based on the search term
    //   // You can customize this method according to your requirements
    //   // For example, you can emit an event or update the filtered products directly
    // },
    changePage(pageIndex) {
      this.currentPage = pageIndex;
    },

    clearFilters() {
      this.selectedCategories = [];
      this.minPrice = "";
      this.maxPrice = "";
    },
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    handleAddToCart() {
      this.$emit("addToCart", this.product_data);
    },
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
  },
  mounted() {
    if (localStorage.getItem("catalogData")) {
      const savedData = JSON.parse(localStorage.getItem("catalogData"));
      this.sortType = savedData.sortType;
      this.sortDirection = savedData.sortDirection;
      this.minPrice = savedData.minPrice;
      this.maxPrice = savedData.maxPrice;
    }
    this.$watch(
      () => ({
        sortType: this.sortType,
        sortDirection: this.sortDirection,
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
      }),
      (newData) => {
        localStorage.setItem("catalogData", JSON.stringify(newData));
      },
      { deep: true }
    );
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data arrived!");
      }
    });
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/core/global.scss";

.container {
  max-width: 100%;
  margin: 0 60px;
  @media (max-width: 1021px) {
    max-width: 100%;
    margin: 0 30px;
  }
  @media (max-width: 700px) {
    max-width: 100%;
    margin: 0 10px;
  }
}
.pagination {
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  button {
    background: transparent;
    border: none;
    margin-right: 20px;
    font-family: "PTSans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 130%;
    color: #474a51;
    &.active {
      border: 1px solid #eeeeee;
      padding: 10px;
    }
  }
}
.catalog {
  .sort {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 45px;
    input {
      border: 1px solid #eeeeee;
      margin-right: 29px;
      padding: 7px 10px;
      &::placeholder {
        font-family: "PTSans", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        color: #474a51;
      }
    }
    label {
      font-family: "PTSans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #474a51;
      margin-right: 29px;
    }
    select {
      width: 188px;
      border: 1px solid #eeeeee;
      outline: transparent;
      font-family: "PTSans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: #474a51;
      padding: 4px 10px;
    }
  }
  &--block {
    display: flex;
    justify-content: space-between;
    input[type="text"] {
      width: 70px;
      height: 30px;
      border: 1px solid #eeeeee;
      margin: 26px 10px 0;
    }
    label.label {
    }
    &-sort {
      input[type="checkbox"] {
        width: 20px;
        height: 20px;
        border: 0.5px solid #474a51;
        margin: 0 20px 10px 0;
      }
      label {
        font-family: "PTSans", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        color: #474a51;
        text-align: left;
        // width: max-content;
      }
      &-input {
        display: flex;
        align-items: center;
      }
      .catalog--block-sort-input.distance {
        margin-bottom: 56px;
      }
    }
    &-category {
      display: flex;
      flex-direction: column;
      justify-content: left;
      button {
        padding: 10px 15px;
        gap: 10px;
        width: 155px;
        height: 38px;
        background: #9f9d9d;
        border: none;
        font-family: "PTSans", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #ffffff;
        margin-top: 50px;
      }
      a {
        font-family: "PTSans", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #474a51;
        text-align: left;
        margin: 0 0 10px 0;
      }
    }
  }
  h1 {
    font-family: "Lovelace", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 130%;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #474a51;
    margin: 50px auto 30px;
  }
  &__list {
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    flex-wrap: wrap;
  }
  button {
    padding: 15px 35px;
    height: 51px;
    border: 1px solid #474a51;
    background: transparent;
    font-family: "Futura PT";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #474a51;
    margin-bottom: 160px;
  }
}
@media (max-width: 1021px) {
  .catalog {
    .sort {
      display: flex;
      justify-content: end;
      margin-bottom: 45px;
      label {
        font-family: "PTSans", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        color: #474a51;
        margin-right: 29px;
      }
      select {
        width: 188px;
        height: 30px;
        border: 1px solid #eeeeee;
        outline: transparent;
      }
    }
    &--block {
      display: flex;
      justify-content: space-between;
      input[type="text"] {
        width: 70px;
        height: 30px;
        border: 1px solid #eeeeee;
        margin: 26px 10px 0;
      }
      label.label {
      }
      &-sort {
        input[type="checkbox"] {
          width: 20px;
          height: 20px;
          border: 0.5px solid #474a51;
          margin: 0 20px 10px 0;
        }
        label {
          font-family: "PTSans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
          color: #474a51;
          text-align: left;
          // width: max-content;
        }
        &-input {
          display: flex;
          align-items: center;
        }
        .catalog--block-sort-input.distance {
          margin-bottom: 56px;
        }
      }
      &-category {
        display: flex;
        flex-direction: column;
        justify-content: left;
        button {
          padding: 10px 15px;
          gap: 10px;
          width: 155px;
          height: 38px;
          background: #9f9d9d;
          border: none;
          font-family: "PTSans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 130%;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #ffffff;
          margin-top: 50px;
        }
        a {
          font-family: "PTSans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #474a51;
          text-align: left;
          margin: 0 0 10px 0;
        }
      }
    }
    h1 {
      font-family: "Lovelace", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 52px;
      line-height: 130%;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #474a51;
      margin: 50px auto 30px;
    }
    &__list {
      display: flex;
      justify-content: flex-end;
      gap: 30px;
      flex-wrap: wrap;
    }
    button {
      padding: 15px 35px;
      height: 51px;
      border: 1px solid #474a51;
      background: transparent;
      font-family: "Futura PT";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #474a51;
      margin-bottom: 160px;
    }
  }
}
@media (max-width: 700px) {
  .distance {
    margin-bottom: 50px;
  }
  .catalog {
    .sort {
      margin-bottom: 34px;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      .distance {
        margin-top: 30px;
      }
      label {
        font-family: "PTSans", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        color: #474a51;
        margin-right: 29px;
      }
      select {
        width: 188px;
        height: 30px;
        border: 1px solid #eeeeee;
        outline: transparent;
      }
    }
    &--block {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      input[type="text"] {
        width: 70px;
        height: 30px;
        border: 1px solid #eeeeee;
        margin: 26px 10px 0;
      }
      label.label {
      }
      &-sort {
        background: #eeeeee;
        padding: 40px 30px;
        margin-bottom: 50px;
        input[type="checkbox"] {
          width: 20px;
          height: 20px;
          border: 0.5px solid #474a51;
          margin: 0 20px 10px 0;
        }
        label {
          font-family: "PTSans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
          color: #474a51;
          text-align: left;
          // width: max-content;
        }
        &-input {
          display: flex;
          align-items: center;
        }
        .catalog--block-sort-input.distance {
          margin-bottom: 30px;
        }
      }
      &-category {
        display: flex;
        flex-direction: column;
        justify-content: left;
        button {
          padding: 10px 15px;
          gap: 10px;
          width: 155px;
          height: 38px;
          background: #9f9d9d;
          border: none;
          font-family: "PTSans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 130%;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #ffffff;
          margin-top: 50px;
        }
        a {
          font-family: "PTSans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #474a51;
          text-align: left;
          margin: 0 0 10px 0;
        }
      }
    }
    h1 {
      font-size: 30px;
      text-align: left;
      text-transform: uppercase;
      margin: 40px auto 10px;
    }
    &__list {
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
    }
    button {
      padding: 15px 35px;
      height: 51px;
      border: 1px solid #474a51;
      background: transparent;
      font-family: "Futura PT";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #474a51;
      margin-bottom: 160px;
    }
  }
}
</style>
