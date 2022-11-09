import { mount } from '@vue/test-utils'
import MovieCast from '@/components/MovieCast.vue'

describe('MovieCast.vue', () => {

    test('reviews are rendered from props', () => {
        const wrapper = mount(MovieCast, {
            propsData: {
                cast: [
                    {
                        "id": "nm0898812",
                        "name": "Luciano Vincenzoni",
                        "description": "(story) &"
                    },
                    {
                        "id": "nm0001466",
                        "name": "Sergio Leone",
                        "description": "(story)"
                    },
                    {
                        "id": "nm0408488",
                        "name": "Agenore Incrocci",
                        "description": "(screenplay) (as Age) &"
                    }
                ]
            }
        });
        expect(wrapper.find('.cast').isVisible()).toBe(true);
    });

});