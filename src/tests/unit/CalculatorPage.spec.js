import { mount } from "@vue/test-utils";
import CalculatorPage from "@/components/CalculatorPage.vue"; // Ajusta el camí segons calgui

describe("CalculatorPage", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(CalculatorPage);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("mostra 0 inicialment", () => {
        expect(wrapper.find(".display").text()).toBe("0");
    });

    it("afegeix números al display", async () => {
        await wrapper.vm.appendNumber("7");
        expect(wrapper.find(".display").text()).toBe("7");
        await wrapper.vm.appendNumber("8");
        expect(wrapper.find(".display").text()).toBe("78");
    });

    it("realitza una suma correcta", async () => {
        await wrapper.vm.appendNumber("4");
        await wrapper.vm.setOperation("+");
        await wrapper.vm.appendNumber("5");
        await wrapper.vm.calculate();
        expect(wrapper.find(".display").text()).toBe("9");
    });

    it("realitza una resta correcta", async () => {
        await wrapper.vm.appendNumber("9");
        await wrapper.vm.setOperation("-");
        await wrapper.vm.appendNumber("3");
        await wrapper.vm.calculate();
        expect(wrapper.find(".display").text()).toBe("6");
    });

    it("realitza una multiplicació correcta", async () => {
        await wrapper.vm.appendNumber("6");
        await wrapper.vm.setOperation("*");
        await wrapper.vm.appendNumber("7");
        await wrapper.vm.calculate();
        expect(wrapper.find(".display").text()).toBe("42");
    });

    it("realitza una divisió correcta", async () => {
        await wrapper.vm.appendNumber("8");
        await wrapper.vm.setOperation("/");
        await wrapper.vm.appendNumber("4");
        await wrapper.vm.calculate();
        expect(wrapper.find(".display").text()).toBe("2");
    });

    it("gestiona números decimals correctament", async () => {
        await wrapper.vm.appendNumber("5");
        await wrapper.vm.appendDecimal();
        await wrapper.vm.appendNumber("5");
        expect(wrapper.find(".display").text()).toBe("5.5");
    });

    it("neteja correctament amb el botó de neteja", async () => {
        await wrapper.vm.appendNumber("9");
        await wrapper.vm.appendNumber("3");
        await wrapper.vm.clear();
        expect(wrapper.find(".display").text()).toBe("0");
    });

    it("impedeix operacions amb números incomplets", async () => {
        await wrapper.vm.setOperation("+");
        await wrapper.vm.appendNumber("5");
        await wrapper.vm.calculate();
        expect(wrapper.find(".display").text()).toBe("5"); // No hauria de canviar perquè no hi ha primer valor
    });

    it("mostra correctament l'historial d'operacions", async () => {
        // Realitza una sèrie de càlculs per generar historial
        await wrapper.vm.appendNumber("3");
        await wrapper.vm.setOperation("+");
        await wrapper.vm.appendNumber("4");
        await wrapper.vm.calculate(); // 3 + 4 = 7
        expect(wrapper.find(".display").text()).toBe("7");

        await wrapper.vm.appendNumber("10");
        await wrapper.vm.setOperation("-");
        await wrapper.vm.appendNumber("2");
        await wrapper.vm.calculate(); // 10 - 2 = 8
        expect(wrapper.find(".display").text()).toBe("8");

        await wrapper.vm.appendNumber("6");
        await wrapper.vm.setOperation("*");
        await wrapper.vm.appendNumber("3");
        await wrapper.vm.calculate(); // 6 * 3 = 18
        expect(wrapper.find(".display").text()).toBe("18");

        // Verifica l'historial
        const historyItems = wrapper.findAll(".history li");
        expect(historyItems).toHaveLength(3);
        expect(historyItems[0].text()).toBe("3 + 4 = 7");
        expect(historyItems[1].text()).toBe("10 - 2 = 8");
        expect(historyItems[2].text()).toBe("6 * 3 = 18");
    });
});
