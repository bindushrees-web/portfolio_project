function initGeolocation() {

    const el = document.getElementById("location-msg");

    if (!el) return;

    // LOADING MESSAGE

    el.innerHTML = `
        <span class="text-slate-400">
            Detecting your location...
        </span>
    `;

    // CHECK SUPPORT

    if (!navigator.geolocation) {

        el.innerHTML = `
            <span class="text-red-500">
                Geolocation is not supported by your browser
            </span>
        `;

        return;
    }

    // GET LOCATION

    navigator.geolocation.getCurrentPosition(

        async (position) => {

            const lat = position.coords.latitude;

            const lon = position.coords.longitude;

            try {

                const response = await fetch(

                    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,

                    {
                        headers: {
                            "User-Agent": "bindu-portfolio"
                        }
                    }

                );

                if (!response.ok) {

                    throw new Error("Failed to fetch location");

                }

                const data = await response.json();

                const city =
                    data.address.city ||
                    data.address.town ||
                    data.address.village ||
                    data.address.state ||
                    "your area";

                const country =
                    data.address.country || "";

                // SUCCESS MESSAGE

                el.innerHTML = `

                    <div class="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-full shadow-sm">

                        <span class="text-blue-600 text-lg">
                            📍
                        </span>

                        <span class="text-slate-600 font-medium">

                            Browsing from 
                            <span class="font-bold text-slate-800">
                                ${city}
                            </span>

                            ${country ? `, ${country}` : ""}

                        </span>

                    </div>

                `;

            }

            catch (error) {

                console.error(error);

                el.innerHTML = `

                    <span class="text-orange-500 font-medium">
                        📍 Location detected
                    </span>

                `;

            }

        },

        (error) => {

            console.error(error);

            // ERROR HANDLING

            switch (error.code) {

                case error.PERMISSION_DENIED:

                    el.innerHTML = `

                        <span class="text-slate-400 font-medium">
                            📍 Location access denied
                        </span>

                    `;

                    break;

                case error.POSITION_UNAVAILABLE:

                    el.innerHTML = `

                        <span class="text-slate-400 font-medium">
                            📍 Location unavailable
                        </span>

                    `;

                    break;

                case error.TIMEOUT:

                    el.innerHTML = `

                        <span class="text-slate-400 font-medium">
                            📍 Request timed out
                        </span>

                    `;

                    break;

                default:

                    el.innerHTML = `

                        <span class="text-slate-400 font-medium">
                            📍 Unable to detect location
                        </span>

                    `;

            }

        },

        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }

    );

}

initGeolocation();