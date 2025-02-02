const candidates = [
    { id: 1, name: "Alice Johnson", party: "Party A", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmqsBV4VJ9L1Qw4xlHCDitwBF2NjCinAPWg&s" },
    { id: 2, name: "Bob Smith", party: "Party B", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81wMi7rJoP4k_PS-ExKqJhA9Mpo7JjVB91A&s" },
    { id: 3, name: "Charlie Lee", party: "Party C", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS692WRoqLY3I9MxPBC_7as6fxtxshaiZ7Uqg&s" }
  ];
  
  function Voting() {
    return (
      <div>
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Cast Your Vote</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img src={candidate.image} alt={candidate.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold">{candidate.name}</h3>
              <p className="text-gray-600">{candidate.party}</p>
              <button 
                className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
              >
                Vote
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Voting;