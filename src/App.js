import './App.css';
import Bscard from './Bscard';

function App() {
  let cardarr = [{
    plan: 'FREE',
    usd: '$0',
    features: [{
      title: 'Single User',
      txtpro: false
    }, {
      title: '5GB Storage',
      txtpro: false
    }, {
      title: 'Unlimited Public Projects',
      txtpro: false
    }, {
      title: 'Community Access',
      txtpro: false
    }, {
      title: 'Unlimited Private Projects',
      txtpro: true
    }, {
      title: 'Dedicated Phone Support',
      txtpro: true
    }, {
      title: 'Free Subdomain',
      txtpro: true
    }, {
      title: 'Monthly Status Reports',
      txtpro: true
    }]
  }, {
    plan: 'PLUS',
    usd: '$9',
    features: [{
      title: '5 User',
      txtpro: false
    }, {
      title: '50GB Storage',
      txtpro: false
    }, {
      title: 'Unlimited Public Projects',
      txtpro: false
    }, {
      title: 'Community Access',
      txtpro: false
    }, {
      title: 'Unlimited Private Projects',
      txtpro: false
    }, {
      title: 'Dedicated Phone Support',
      txtpro: false
    }, {
      title: 'Free Subdomain',
      txtpro: false
    }, {
      title: 'Monthly Status Reports',
      txtpro: true
    }]
  }, {
    plan: 'PRO',
    usd: '$49',
    features: [{
      title: 'Unlimited User',
      txtpro: false
    }, {
      title: '150GB Storage',
      txtpro: false
    }, {
      title: 'Unlimited Public Projects',
      txtpro: false
    }, {
      title: 'Community Access',
      txtpro: false
    }, {
      title: 'Unlimited Private Projects',
      txtpro: false
    }, {
      title: 'Dedicated Phone Support',
      txtpro: false
    }, {
      title: 'Unlimited Free Subdomain',
      txtpro: false
    }, {
      title: 'Monthly Status Reports',
      txtpro: false
    }]
  }];
  return (
    <div className="App">
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            {cardarr.map((eles) => <Bscard card={eles} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
