import './App.css'

function App() {
  return (
    <section>
      <h1>Nathaniel V. Manansala</h1>
      <Container />
    </section>
  );
}

function Container() {
  return (
    <section style={{ textAlign: 'center', }}>
      <div style={{
        margin: '0 auto',
        width: '200px',
        height: '200px',
        border: '3px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        color: 'black'
      }}>
        CPEITEL
      </div>
    </section>
  );
}




// function Profile( imageId, name) {
//   return (
//     <img
//       src={getImageUrl ( imageId )}
//       alt={name}
//     />
//   )
// }

// function App() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile imageId={'YfeOqp2'} name={'Katsuko Saruhashi'}/>
//       <Profile imageId={'OKS67lh'} name={'Aklilu Lemma'} />
//       <Profile imageId={'1bX5QH6'} name={'Lin Lanying'} />
//     </section>
//   );
// }

// function getImageUrl(imageId) {
//   return (
//     'https://i.imgur.com/' +
//     imageId +
//     's' +
//     '.jpg'
//   )
// }

export default App
