<template lang="pug">
  div.container
    //- header-component
    .catalog
        h1 Каталог
        label(for="sortDirection") Сортування:
        select(id="sortDirection" v-model="sortDirection")
            option(value="asc") По возрастанию
            option(value="desc") По убыванию
    .catalog--block
      .catalog--block-sort
        .catalog--block-category 
          a Всі категорії
          a Новинки
          a Роспродаж
          input(type="checkbox" v-model="selectedCategories" value="Сукні") 
          label Сукні
          input(type="checkbox") 
          label Юбки
          input(type="checkbox" v-model="selectedCategories" value="Блузи") 
          label Блузи
          input(type="checkbox") 
          label Футболки, топи
          input(type="checkbox" v-model="selectedCategories" value="Кардигани") 
          label Кардигани
          input(type="checkbox") 
          label Джинси
          input(type="checkbox") 
          label Комбінезони
          input(type="checkbox" v-model="selectedCategories" value="Костюми") 
          label Костюми
          input(type="checkbox") 
          label Пальто, плащі, куртки
        div
          label(for="minPrice") Минимальная цена:
          input(type="text" id="minPrice" v-model="minPrice")

          label(for="maxPrice") Максимальная цена:
          input(type="text" id="maxPrice" v-model="maxPrice")

        div
          label(for="sortType") Тип сортировки:
          select(id="sortType" v-model="sortType")
            option(value="price") Цена
            option(value="name") Названиe
      .catalog__list
        CatalogItemComp(
            v-for="product in sortedProducts"
            :key="product.article"
            :product_data="product"
            @addToCart="addToCart"
            )
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
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),

    sortedProducts() {
      let products = [...this.PRODUCTS];
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
  },
  methods: {
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
    // let selectContainer = document.querySelector(".select-container");
    // let select = document.querySelector(".select");
    // let input = document.getElementById("input");
    // let options = document.querySelectorAll(".select-container .option");

    // select.onclick = () => {
    //   selectContainer.classList.toggle("active");
    // };

    // options.forEach((e) => {
    //   e.addEventListener("click", () => {
    //     input.value = e.innerText;
    //     selectContainer.classList.remove("active");
    //     options.forEach((e) => {
    //       e.classList.remove("selected");
    //     });
    //     e.classList.add("selected");
    //   });
    // });
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
}
.catalog {
  &--block {
    display: flex;
    justify-content: space-between;
    &-category {
      display: flex;
      flex-direction: column;
      justify-content: left;
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
</style>
