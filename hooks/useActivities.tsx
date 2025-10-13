import { useSQLiteContext } from "expo-sqlite";
import { act, useEffect, useState } from "react";

type Activity = {
  id: number;
  steps: number;
  date: string;
}

export function useActivities() {
  const [activities, setActivities] = useState([]);
  const db = useSQLiteContext();

  function getActivities() {
    return db.getAllSync<Activity>("SELECT * FROM activities")
  }

  function insertActivity(steps: number, date: Date) {
    db.execSync(
      `INSERT INTO activities (steps, date) VALUES (${steps}, ${date.getTime()})`
    );
    reload();
  }

  function reload() {
    const data = getActivities();
    setActivities(data);
  }

  useEffect(() => {
    reload()
  }, [])

  return { getActivities, activities, insertActivity };
}