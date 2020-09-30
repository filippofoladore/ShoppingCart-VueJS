<template>
  <div>
    <p>{{ detail.name | capitalizeFirst }} - {{ detail.price }}€</p>
    <p> Quantità: {{ article.qty }}/{{ detail.available_quantity }}</p>
    <button @click="addOne" class="btn">➕</button>
    <button @click="removeOne" class="btn">➖</button>
    <p>Subtotale articolo: {{ detail.price * article.qty }}</p>
  </div>
</template>

<script>
import OrdersController from "../OrdersController";
export default {
  name: "Articles",
  props: {
    article: Object,
  },
  data() {
    return {
      detail: [],
    };
  },
  async created() {
    try {
      this.detail = await OrdersController.getArticleDetail(
        this.article.article_id
      );
      this.$emit(
        "modified",
        this.detail.price * this.article.qty,
        this.detail.price,
        this.article.qty,
        '',
        this.detail.name, 
        this.article.article_id
      );
    } catch (err) {
      this.error = err;
    }
  },
  methods: {
    addOne() {
      if (this.article.qty + 1 <= this.detail.available_quantity) {
        this.article.qty += 1;
        this.$emit(
          "modified",
          this.detail.price * this.article.qty,
          this.detail.price,
          this.article.qty,
          "add",
          this.detail.name, 
          this.article.article_id
        );
      }
    },
    removeOne() {
      if (this.article.qty - 1 != 0) {
        this.article.qty -= 1;
        this.$emit(
          "modified",
          this.detail.price * this.article.qty,
          this.detail.price,
          this.article.qty,
          "subtract",
          this.detail.name, 
          this.article.article_id
        );
      }
    },
  },
  filters: {
    capitalizeFirst: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style scoped>
.btn {
  cursor: pointer;
  margin: 10px;
  outline: none;
  background: rgb(116, 251, 112);
  border: 0;
  padding: 8px;
  border-radius: 5px;
}
.btn:hover {
  background: rgb(55, 245, 49);
}
</style>