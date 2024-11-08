import { mount } from "@vue/test-utils";
import CommentsPage from "@/components/CommentsPage.vue";
import flushPromises from "flush-promises";

global.fetch = jest.fn();

describe("CommentsPage.vue", () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    it("carrega i mostra els comentaris correctament", async () => {
        const mockComments = [
            { id: 1, name: "Comentari 1", body: "Aquest és el comentari 1", email: "test1@example.com" },
            { id: 2, name: "Comentari 2", body: "Aquest és el comentari 2", email: "test2@example.com" },
        ];

        fetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockComments),
        });

        const wrapper = mount(CommentsPage);

        await flushPromises();

        const commentTitles = wrapper.findAll("h3");
        expect(commentTitles.length).toBe(2);
        expect(commentTitles[0].text()).toContain("Comentari 1");
        expect(commentTitles[1].text()).toContain("Comentari 2");

        expect(wrapper.html()).toContain("Aquest és el comentari 1");
        expect(wrapper.html()).toContain("Aquest és el comentari 2");
    });

    it("crida la funció fetchComments en fer clic al botó", async () => {
        fetch.mockResolvedValue({
            ok: true,
            json: () =>
                Promise.resolve([
                    { id: 1, name: "Comentari recarregat", body: "Contingut del comentari", email: "test@example.com" },
                ]),
        });

        const wrapper = mount(CommentsPage);

        await flushPromises();

        await wrapper.find("button").trigger("click");
        await flushPromises();

        expect(fetch).toHaveBeenCalledTimes(2);
        expect(wrapper.html()).toContain("Comentari recarregat");
    });
});
