import { useState } from 'react';
import './index.css';

const Hero = () => (
  <section className="hero" id="documentary">
    <div className="hero-tags">
      <span className="tag highlight">Documentary</span>
      <span className="tag">In Production</span>
    </div>
    <h1 className="hero-title">Uncovering the forgotten stories of the beautiful game.</h1>
    <p className="hero-subtitle">
      The <strong>Jimmy Hogan Story</strong> traces the journey of the English visionary who shaped continental European football, only to be forgotten by his home country.
    </p>
  </section>
);

const Bio = () => (
  <aside className="bio-sidebar" id="about">
    <img src="/assets/nebojsa.jpg" alt="Nebojsa Sarkanovic" className="bio-image" id="profile-img" />
    <h3 className="bio-name">Nebojsa Sarkanovic</h3>
    <div className="bio-title">Sports Historian & Filmmaker</div>
    <p className="bio-text">
      Nebojsa is a graduate of the College of Sports Media, specializing in the deep, often-overlooked history of continental and Eastern European football.
    </p>
    <p className="bio-text">
      Previously, he worked independently as a sports researcher in Novi Sad, Serbia, digging into the archives to tell the grassroots stories of small clubs across Vojvodina.
    </p>
    <p className="bio-text" style={{ fontStyle: 'italic', marginTop: '1.5rem', color: 'var(--text-primary)' }}>
      Currently in production on a feature-length documentary about the life and legacy of Jimmy Hogan.
    </p>
  </aside>
);

const Articles = ({ onReadArticle }) => {
  const articles = [
    {
      id: 1,
      title: "Why the Red Star? Analyzing the Historical Reasoning Why So Many Clubs have a Red Star in Their Badge",
      excerpt: "Across Eastern Europe, the red star remains one of the most polarizing and ubiquitous symbols in football. From Belgrade to Leipzig, its origins trace back to...",
      date: "OCT 2024",
      tag: "Essay"
    },
    {
      id: 2,
      title: "The Danubian Whirl: Hugo Meisl's Tactical Revolution",
      excerpt: "Before Total Football, there was the Wunderteam. How the coffee houses of 1930s Vienna birthed a fluid, intelligent style of play that humiliated the English establishment.",
      date: "SEP 2024",
      tag: "Archive"
    },
    {
      id: 3,
      title: "Before the Golden Team: The English Roots of Hungarian Football",
      excerpt: "When Hungary dismantled England 6-3 in 1953, the English press called it a tactical awakening. But the true foundation of that Hungarian side was built decades earlier by men from Lancashire.",
      date: "AUG 2024",
      tag: "Feature"
    }
  ];

  return (
    <div className="articles-list" id="articles">
      <h2 className="section-title">Selected Writing</h2>
      {articles.map(article => (
        <article key={article.id} className="article-card" onClick={onReadArticle}>
          <div className="article-meta">{article.tag} // {article.date}</div>
          <h3 className="article-title">{article.title}</h3>
          <p className="article-excerpt">{article.excerpt}</p>
        </article>
      ))}
    </div>
  );
};

const PaywallModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3 className="modal-title">Soccer Undiscovered Premium</h3>
        <p className="modal-text">
          This article is available exclusively to <strong>Soccer Undiscovered Premium</strong> members and research partners. 
          <br/><br/>
          Subscribe to access full historical essays, archival research, and early documentary previews.
        </p>
        <button className="btn-subscribe" onClick={() => alert("Subscriptions are currently closed while the documentary is in production. If you are an archive or producing partner, please reach out via the contact email.")}>Subscribe / Sign In</button>
      </div>
    </div>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="container">
        <header className="header">
          <div className="logo">SOCCER<span className="text-yellow">UNDISCOVERED</span></div>
          <nav className="header-nav">
            <a href="#documentary">Documentary</a>
            <a href="#articles">Articles</a>
            <a href="#about">About</a>
            <a href="mailto:necosarkan@gmail.com">Contact</a>
          </nav>
        </header>

        <Hero />

        <main className="grid-layout">
          <Articles onReadArticle={() => setIsModalOpen(true)} />
          <Bio />
        </main>

      </div>

      <footer className="footer">
        <div className="container">
          &copy; {new Date().getFullYear()} Nebojsa Sarkanovic. All Rights Reserved. Contact: necosarkan@gmail.com
        </div>
      </footer>

      <PaywallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default App;
