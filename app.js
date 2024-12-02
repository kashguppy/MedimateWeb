// Function to handle user details submission (name, age, weight)
function submitDetails() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
  
    if (name && age && weight) {
      localStorage.setItem('userDetails', JSON.stringify({ name, age, weight }));
  
      // Hide first screen, show second screen
      document.getElementById('firstScreen').style.display = 'none';
      document.getElementById('secondScreen').style.display = 'block';
    } else {
      alert("Please fill out all fields.");
    }
  }
  
  // Function to handle uploading medications (image files)
  function uploadMedications() {
    const fileInput = document.getElementById('medicationUpload');
    const fileList = fileInput.files;
  
    if (fileList.length > 0) {
      const scheduleList = document.getElementById('scheduleList');
      scheduleList.innerHTML = '';  // Clear previous schedule
  
      // Simulate displaying medication names and ingredients
      const medicationData = [
        { name: 'Aspirin', ingredients: ['Acetylsalicylic acid'], clash: false },
        { name: 'Ibuprofen', ingredients: ['Ibuprofen'], clash: true, clashWith: 'Aspirin' },
        { name: 'Paracetamol', ingredients: ['Acetaminophen'], clash: false },
        { name: 'Amoxicillin', ingredients: ['Amoxicillin'], clash: false },
        { name: 'Tylenol', ingredients: ['Acetaminophen'], clash: false }
      
      ];
  
      // Loop through each uploaded file and simulate processing
      Array.from(fileList).forEach((file, index) => {
        const med = medicationData[index % medicationData.length]; // Use modulo to simulate different medication data
        const listItem = document.createElement('li');
        let clashMessage = '';
  
        // Check if ingredients clash
        if (med.clash) {
          clashMessage = `Warning: This medication clashes with ${med.clashWith}.`;
        }
  
        listItem.innerHTML = `<strong>${med.name}</strong><br>Ingredients: ${med.ingredients.join(', ')}<br>${clashMessage}`;
        scheduleList.appendChild(listItem);
      });
  
      // Hide second screen, show schedule screen
      document.getElementById('secondScreen').style.display = 'none';
      document.getElementById('scheduleScreen').style.display = 'block';
    } else {
      alert("Please upload at least one medication image.");
    }
  }
  
  // Function to submit journal entry
  function submitJournal() {
    const journalEntry = document.getElementById('symptomJournal').value;
    if (journalEntry) {
      alert("Journal entry submitted: " + journalEntry);
    } else {
      alert("Please enter your symptoms.");
    }
  }
  