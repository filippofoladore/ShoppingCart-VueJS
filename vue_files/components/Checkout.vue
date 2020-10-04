<template>
  <div>
    <h1 class="title">CARRELLO</h1>
    <ul class="article">
      <li v-for="art in order.articles" :key="art.article_id">
        <Articles :article="art" @modified="edit" />
      </li>
    </ul>

    <div class="pay-div">
      Totale ordine: {{ totalCart }}€
      <div class="break"></div>
      <button @click="payNow" class="pay" id="pay-now">💸 PAGA ORA</button>
      <div class="break"></div>
      <div id="thank-you"></div>
      <button @click="backHome" id="back-home">🧭 Torna alla home</button>
    </div>
  </div>
</template>

<script>
import OrdersController from "../OrdersController";
import Articles from "./Articles";

export default {
  name: "Checkout",
  components: {
    Articles,
  },
  data() {
    return {
      user: "5e4fde5d21146d12587ffd98",
      order: {},
      totalCart: 0,
      finalOrder: [],
    };
  },
  async created() {
    this.order = await OrdersController.getOrder("5e4fde5d21146d12587ffd98");
  },
  methods: {
    edit(tot, price, quantity, mode, name, id) {
      if (mode === "add") {
        if (quantity != 1) {
          this.totalCart = this.totalCart + tot - price * (quantity - 1);
          let newItem = { id, name, price, quantity, tot };

          const index = this.finalOrder.findIndex((e) => e.id === newItem.id);
          if (index === -1) {
            this.finalOrder.push(newItem);
          } else {
            this.finalOrder[index] = newItem;
          }
        }
      } else if (mode === "subtract") {
        if (quantity != 1) {
          this.totalCart = this.totalCart - tot + price * (quantity - 1);
          let newItem = { id, name, price, quantity, tot };

          const index = this.finalOrder.findIndex((e) => e.id === newItem.id);
          if (index === -1) {
            this.finalOrder.push(newItem);
          } else {
            this.finalOrder[index] = newItem;
          }
        } else {
          this.totalCart -= tot;
          let newItem = { id, name, price, quantity, tot };
          const index = this.finalOrder.findIndex((e) => e.id === newItem.id);
          if (index === -1) {
            this.finalOrder.push(newItem);
          } else {
            this.finalOrder[index] = newItem;
          }
        }
      } else {
        this.totalCart += tot;
        let newItem = { id, name, price, quantity, tot };

        const index = this.finalOrder.findIndex((e) => e.id === newItem.id);
        if (index === -1) {
          this.finalOrder.push(newItem);
        } else {
          this.finalOrder[index] = newItem;
        }
      }
    },
    async payNow() {
      document.getElementById("pay-now").disabled = true;
      let txt = `Grazie per l'acquisto! <div class="break"></div>`;
      for (let i = 0; i < this.finalOrder.length; i++) {
        let name =
          this.finalOrder[i].name.charAt(0).toUpperCase() +
          this.finalOrder[i].name.slice(1);
        txt +=
          name + ": €" + this.finalOrder[i].tot + `<div class="break"></div>`;
      }
      txt += `Per un totale di €${this.totalCart}`;
      document.getElementById("pay-now").innerHTML = "";
      document.getElementById("pay-now").classList.add("loading");
      let obj = {
        id: this.user,
        order: this.finalOrder,
      };
      await OrdersController.complete(obj);
      document.getElementById("thank-you").style.display = "block";
      document.getElementById("thank-you").innerHTML = txt;
      document.getElementById("pay-now").classList.remove("loading");
      document.getElementById("pay-now").innerHTML = "🎉 Grazie!";
      document.getElementById("back-home").style.display = "block";
    },
    backHome() {
      window.location.href = "http://localhost:8080";
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  text-align: center;
}
.article {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.article li {
  text-align: center;
  padding: 15px;
  border: 0.5pt solid #232323;
  border-radius: 5px;
}
.pay-div {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.break {
  width: 100%;
}
.pay,
#back-home {
  cursor: pointer;
  margin: 10px;
  outline: none;
  background: rgb(116, 251, 112);
  border: 0;
  padding: 8px 30px;
  border-radius: 5px;
  font-weight: bold;
}
.pay:hover {
  background: rgb(55, 245, 49);
}
#thank-you {
  margin-top: 30px;
  font-size: 25px;
  display: none;
  padding: 20px;
  border-radius: 5px;
  background-color: rgba(55, 245, 49, 0.5);
}
.loading:after {
  content: " .";
  animation: dots 1s steps(5, end) infinite;
}

#back-home {
  display: none;
}

@keyframes dots {
  0%,
  20% {
    color: rgba(0, 0, 0, 0);
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  40% {
    color: #232323;
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  60% {
    text-shadow: 0.25em 0 0 #232323, 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  80%,
  100% {
    text-shadow: 0.25em 0 0 #232323, 0.5em 0 0 #232323;
  }
}
</style>
