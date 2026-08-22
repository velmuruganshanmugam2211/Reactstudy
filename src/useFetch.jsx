import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }

        return response.json();
      })
      .then((data) => {
        if (isMounted) {
          setCourses(Array.isArray(data) ? data : data.Course ?? []);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return [courses, loading, setCourses];
};

export default useFetch;