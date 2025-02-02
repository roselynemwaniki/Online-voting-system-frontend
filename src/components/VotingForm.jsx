import React, { useState, useEffect } from "react";
import { fetchCandidates, submitVote } from "../utils/api";
import { useNavigate } from "react-router-dom";

function VotingForm() {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCandidates().then(setCandidates);
  }, []);

  const handleVote = async () => {
    const response = await submitVote({ candidateId: selectedCandidate });
    if (response.status === 200) {
      navigate("/results");
    } else {
      alert("Vote submission failed");
    }
  };

  return (
    <div className="space-y-4">
      <select
        className="w-full p-2 border rounded-md"
        value={selectedCandidate}
        onChange={(e) => setSelectedCandidate(e.target.value)}
      >
        <option value="">Select a Candidate</option>
        {candidates.map((candidate) => (
          <option key={candidate.id} value={candidate.id}>
            {candidate.name}
          </option>
        ))}
      </select>
      <button
        className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-md"
        onClick={handleVote}
      >
        Submit Vote
      </button>
    </div>
  );
}

export default VotingForm;
