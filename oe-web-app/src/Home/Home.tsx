import Nav from "../Nav/Nav";
import './Home.css'

function Home() {
    return(
        <div>
            <Nav/>
            
            <div id="home">
            <span id="desc">
            <h2>Welcome to ObjectEcho</h2>
            <p>Discover the unseen connections between your life and the objects around you. 
                ObjectEcho is a platform inspired by Jane Bennett's concept of the "force" that inanimate objects exert on our lives.
                </p></span>
            <br/>
            </div>
            <div id="home">
            <span id="desc">
            <h2>Share Your Story</h2>
            <p>Login to create diary entries where you explore the profound impacts objects have on your daily experiences. 
                Reflect on the calls they present to you and how they shape your life's narrative.
                </p></span>
            <br/>
            </div>
            <div id="home">
            <span id="desc">
            <h2>Connect With Others</h2>
            <p>Explore diary entries from fellow users to gain insights into the diverse ways objects influence our lives. Engage in discussions, 
                share experiences, and build connections with a community passionate about exploring the role of objects in our existence.
                </p></span>
            <br/>
            </div>
            <div id="home">
            <span id="desc">
            <h2>Join the Conversation</h2>
            <p>Embark on a journey of self-discovery and connection with ObjectEcho. 
                Start sharing your stories today and uncover the hidden echoes of meaning in the objects that surround you.
                </p></span>
            <br/>
            </div>
            <div id="home">
            <span id="desc">
            <h2>Words of Jane Bennet</h2>
            <p>"In what follows, I, too, will feature the negative power or recalcitrance
of things. But I will also seek to highlight a positive, productive power of
their own. And, instead of focusing on collectives conceived primarily as conglomerates of human designs and practices (“discourse”), I will
highlight the active role of nonhuman materials in public life. In short, I
will try to give voice to a thing-power."
                </p></span>
            <br/>
            </div>
            
        </div>
    )
}

export default Home;