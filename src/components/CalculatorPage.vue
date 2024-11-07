<template>
  <div class="calculator-wrapper">
    <div class="calculator-container">
      <div class="calculator">
        <h2>Calculadora</h2>
        <div class="operation-display">{{ operationDisplay }}</div>
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
      <div class="history">
        <h3>Historial</h3>
        <ul>
          <li v-for="item in history" :key="item">{{ item }}</li>
        </ul>
      </div>
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
      history: [],
      error: false,
      isNewCalculation: false,
    };
  },
  computed: {
    displayValue() {
      return this.error ? "Error" : this.currentInput || "0";
    },
    operationDisplay() {
      if (this.operation && this.previousInput) {
        return `${this.previousInput} ${this.operation} ${this.currentInput || ''}`;
      }
      return "";
    },
  },
  methods: {
    appendNumber(number) {
      if (this.error) this.clear();
      if (this.isNewCalculation) {
        this.currentInput = number;
        this.isNewCalculation = false;
      } else {
        this.currentInput = this.currentInput === "0" ? number : this.currentInput + number;
      }
    },
    appendDecimal() {
      if (this.error) this.clear();
      if (this.isNewCalculation) {
        this.currentInput = "0.";
        this.isNewCalculation = false;
      } else if (!this.currentInput.includes(".")) {
        this.currentInput += ".";
      }
    },
    setOperation(op) {
      if (this.error) this.clear();
      if (this.currentInput === "") return;

      if (this.previousInput && !this.isNewCalculation) {
        this.calculate();
      }

      this.operation = op;
      this.previousInput = this.currentInput;
      this.currentInput = "";
      this.isNewCalculation = false;
    },
    calculate() {
      const prev = parseFloat(this.previousInput);
      const current = parseFloat(this.currentInput);
      if (isNaN(prev) || isNaN(current)) return;

      let result;
      switch (this.operation) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "*":
          result = prev * current;
          break;
        case "/":
          if (current === 0) {
            this.error = true;
            this.operationDisplay = "No es pot dividir per 0";
            return;
          }
          result = prev / current;
          break;
        default:
          return;
      }

      this.currentInput = result.toString();
      this.history.push(`${this.previousInput} ${this.operation} ${current} = ${this.currentInput}`);
      this.previousInput = "";
      this.operation = null;
      this.isNewCalculation = true;
    },
    clear() {
      this.currentInput = "";
      this.previousInput = "";
      this.operation = null;
      this.history = [];
      this.error = false;
      this.isNewCalculation = false;
    },
  },
};
</script>

<style scoped>
.calculator-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}

.calculator-container {
  display: flex;
  align-items: flex-start;
}

.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.display {
  width: 240px;
  height: 50px;
  background: #eee;
  text-align: right;
  padding: 10px;
  font-size: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 5px;
}

.operation-display {
  width: 240px;
  text-align: right;
  font-size: 16px;
  color: #666;
  margin-bottom: 5px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 60px);
  gap: 10px;
  margin-top: 10px;
}

button {
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #e0e0e0;
}

.history {
  margin-left: 20px;
  font-size: 14px;
  color: #333;
}

.history h3 {
  margin: 0;
  font-size: 16px;
  color: #444;
}

.history ul {
  list-style-type: none;
  padding: 0;
  max-height: 300px;
  overflow-y: auto;
}

.history li {
  margin-bottom: 5px;
}
</style>
