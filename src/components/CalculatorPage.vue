<template>
  <div class="calculator">
    <h2>Calculadora</h2>
    <div class="display">{{ displayValue }}</div>
    <div class="buttons">
      <button @click="appendNumber('7')">7</button>
      <button @click="appendNumber('8')">8</button>
      <button @click="appendNumber('9')">9</button>
      <button @click="setOperation('/')">/</button>
      <button @click="appendNumber('4')">4</button>
      <button @click="appendNumber('5')">5</button>
      <button @click="appendNumber('6')">6</button>
      <button @click="setOperation('*')">*</button>
      <button @click="appendNumber('1')">1</button>
      <button @click="appendNumber('2')">2</button>
      <button @click="appendNumber('3')">3</button>
      <button @click="setOperation('-')">-</button>
      <button @click="appendNumber('0')">0</button>
      <button @click="appendDecimal">.</button>
      <button @click="calculate">=</button>
      <button @click="setOperation('+')">+</button>
      <button @click="clear">C</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalculatorPage",
  data() {
    return {
      currentInput: "",
      previousInput: "",
      operation: null,
    };
  },
  computed: {
    displayValue() {
      return this.currentInput || "0";
    },
  },
  methods: {
    appendNumber(number) {
      this.currentInput += number;
    },
    appendDecimal() {
      if (!this.currentInput.includes('.')) {
        this.currentInput += '.';
      }
    },
    setOperation(op) {
      if (this.currentInput === "") return;
      if (this.previousInput !== "") {
        this.calculate();
      }
      this.operation = op;
      this.previousInput = this.currentInput;
      this.currentInput = "";
    },
    calculate() {
      let result;
      const prev = parseFloat(this.previousInput);
      const current = parseFloat(this.currentInput);
      if (isNaN(prev) || isNaN(current)) return;

      switch (this.operation) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          result = prev / current;
          break;
        default:
          return;
      }

      this.currentInput = result.toString();
      this.previousInput = "";
      this.operation = null;
    },
    clear() {
      this.currentInput = "";
      this.previousInput = "";
      this.operation = null;
    },
  },
};
</script>

<style scoped>
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.display {
  width: 200px;
  height: 50px;
  background: #eee;
  text-align: right;
  padding: 10px;
  font-size: 24px;
  border: 1px solid #ccc;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 10px;
}

button {
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
}
</style>
