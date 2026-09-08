export const submitLead = async (lead) => {
     const response = await fetch("/api/leads", {
          method: "POST",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify(lead),
     });

     const data = await response.json();

     if (!response.ok) {
          throw new Error(
               data.message || "Failed to submit form"
          );
     }

     return data;
};