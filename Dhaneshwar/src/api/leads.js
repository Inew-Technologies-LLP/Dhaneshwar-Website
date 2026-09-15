const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export const submitLead = async (lead) => {
     if (!GOOGLE_SCRIPT_URL) {
          console.error("VITE_GOOGLE_SCRIPT_URL is not configured in environment variables");
          throw new Error("Configuration error: Google Script URL is missing");
     }

     const payload = {
          name: lead.name,
          fullName: lead.name,
          "Full Name": lead.name,
          email: lead.email,
          "Email": lead.email,
          phone: lead.phone,
          "Phone": lead.phone,
          project: lead.project,
          "Project": lead.project,
          city: lead.city,
          "City": lead.city,
          country: lead.country || "India",
          "Country": lead.country || "India",
          type: lead.type || "inquiry",
          source: lead.source || "Inquiry Modal",
          date: new Date().toISOString(),
     };

     await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
               "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(payload),
     });

     return { success: true };
};