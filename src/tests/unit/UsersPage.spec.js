import { mount } from "@vue/test-utils";
import UsersPage from "@/components/UsersPage.vue";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import flushPromises from "flush-promises";

describe("UsersPage", () => {
    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.restore();
    });

    it("mostra els usuaris correctament quan la crida API té èxit", async () => {
        const usersData = {
            users: [
                {
                    id: 1,
                    firstName: "John",
                    lastName: "Doe",
                    email: "john@example.com",
                    phone: "123456789",
                },
                {
                    id: 2,
                    firstName: "Jane",
                    lastName: "Smith",
                    email: "jane@example.com",
                    phone: "987654321",
                },
            ],
        };

        mock.onGet("https://dummyjson.com/users").reply(200, usersData);

        const wrapper = mount(UsersPage);
        await flushPromises();

        const userItems = wrapper.findAll("li");
        expect(userItems.length).toBe(usersData.users.length);

        expect(userItems.at(0).text()).toContain("John Doe");
        expect(userItems.at(0).text()).toContain("john@example.com");

        expect(userItems.at(1).text()).toContain("Jane Smith");
        expect(userItems.at(1).text()).toContain("jane@example.com");
    });

    it("mostra un missatge quan no hi ha usuaris", async () => {
        mock.onGet("https://dummyjson.com/users").reply(200, { users: [] });

        const wrapper = mount(UsersPage);
        await flushPromises();

        expect(wrapper.text()).toContain("No s'han trobat usuaris.");
    });

    it("carrega els usuaris quan es fa clic al botó", async () => {
        mock.onGet("https://dummyjson.com/users").reply(200, {
            users: [
                {
                    id: 1,
                    firstName: "John",
                    lastName: "Doe",
                    email: "john@example.com",
                    phone: "123456789",
                },
            ],
        });

        const wrapper = mount(UsersPage);
        await wrapper.find("button").trigger("click");
        await flushPromises();

        expect(wrapper.text()).toContain("John Doe");
    });
});
