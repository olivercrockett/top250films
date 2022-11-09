import { mount } from '@vue/test-utils'
import MovieReviews from '@/components/MovieReviews.vue'

describe('MovieReviews.vue', () => {

    test('reviews are rendered from props', () => {
        const wrapper = mount(MovieReviews, {
            propsData: {
                reviews: [
                    {
                        "username": "Smells_Like_Cheese",
                        "userUrl": "https://www.imdb.com/user/ur1293485",
                        "reviewLink": "https://www.imdb.com/review/rw1405659",
                        "warningSpoilers": false,
                        "date": "29 June 2006",
                        "rate": "10",
                        "helpful": "203 out of 228 found this helpful.",
                        "title": "For a girl who doesn't enjoy westerns much, this was one of the greatest films ever!",
                        "content": "Gosh, The Good, the Bad, and the Ugly, I finally saw this film! Who hasn't heard of it? First off, may I say that Clint Eastwood... what a hottie in his day! :D Sorry, had to get that off my chest. Sergio Leone from what I understood was a huge western film fanatic and in the 60's pretty much most folks had moved onto other genre's. I mean, I would agree that most western's are pretty much the same and stereotypical.Sergio however took a story and added some elements to it such as comedy, drama, and war. The story flows so well and just compliments all of it's characters. By far my favorite character was The Good, played by Clint. He is a bounty hunter who captures The Ugly numerous times just to free him before every hanging and splits the winnings with him. When they learn of a coffin in the desert that has $200,000, they go for it. Of course we have the Bad who is a ruthless killer who also wants in on the doe.The Good, The Bad, and The Ugly is a terrific film and I thank all the IMDb users for their useful comments and that pushed me to finally rent this western classic. Let's give it up for Sergio! 10/10"
                    },
                    {
                        "username": "MadReviewer",
                        "userUrl": "https://www.imdb.com/user/ur1125206",
                        "reviewLink": "https://www.imdb.com/review/rw0092718",
                        "warningSpoilers": false,
                        "date": "16 April 2001",
                        "rate": "10",
                        "helpful": "802 out of 880 found this helpful.",
                        "title": "Brutal, brilliant, and one of the best Westerns ever made",
                        "content": "A sprawling Western epic that follows the adventures of three gunfighters looking for $200,000 in stolen gold, Sergio Leone's `The Good, the Bad, and the Ugly' is a masterpiece, one that continues to get better and better with each viewing. In a way, it's a morality play, weighing the consequences of good and evil, but it does so in a realistic manner. Sometimes, crime does pay, at least in the short term, and sometimes good does go unrewarded. This film probably signaled the death knell of the traditional John Wayne `White Hat/Black Hat' Western.The three main characters make the film. Lee Van Cleef (`The Bad') is evil personified. Totally ruthless, he'll do whatever it takes to get what he wants. Clint Eastwood (`The Good') is the Man With No Name, not really `good' in a traditional sense . . . but he has a certain sense of honor and tries to do the right thing. (Watch the scene when he gives a dying Confederate soldier a puff of his cigar - powerful, and it sums up everything that the Man With No Name is all about, without saying a single word.) Eli Wallach (`The Ugly') is Tuco, and he's easily the most complex - if not the best - character in the film. All impulse and rage, Tuco spins wildly throughout the movie, stealing, lying, pretending to be Clint Eastwood's best friend in one scene, trying to kill him in another - Tuco truly represents `the ugly' side of people.The movie is long, but there's not a wasted scene in the film. Each one slowly lets the film unfold with a certain style and grace, revealing more about each character and what's going on. The pacing is incredible, as is the direction - Sergio Leone manages to build a lot of uncomfortable tension in the film, keeping the film from ever getting predictable. Any typical Western cliché that you can possibly think of is either given a unique twist or utterly destroyed by Leone's masterful storytelling. Of special mention is Ennio Morricone's score, which is absolutely perfect. Two scenes - one in a Union prison camp, one in the climatic gunfight in the cemetery at the end of the film - are amazing on their own, but they become absolutely astonishing with combined with Morricone's powerful score. This movie is absolutely brilliant. If you haven't seen it yet, I strongly urge to do so. Immediately. (And then, go watch `Unforgiven' . . . in a way, I think that `Unforgiven' is the sequel to `The Good, the Bad, and the Ugly - it's the story of what eventually happened to the Man With No Name.) `The Good, the Bad, and the Ugly' is easily one of the best Westerns ever made. A++"
                    }
                ]
            }
        });
        expect(wrapper.find('.review').isVisible()).toBe(true);
    });

});