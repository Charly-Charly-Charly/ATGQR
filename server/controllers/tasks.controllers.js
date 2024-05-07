<<<<<<< HEAD
import { pool } from "../db.js";


export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM qr_codes ORDER BY id ASC"
    ); 
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getqr = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM QR WHERE id_qr =?", [
      req.params.id_qr,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "qr not found" });

    return res.json(result); // Return the result

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getqrs = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM QR ORDER BY id_qr ASC" 
    ); 
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getqrsevent = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM QR WHERE ID_evento = ? ORDER BY id_qr ASC",[
        req.params.ID_evento,
      ]
    ); 
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const getEvent = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Eventos WHERE id_event = ?", [
      req.params.id_event,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Event not found" });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const getEvents = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM Eventos ORDER BY id_event ASC"
    ); 
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getLogs = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM logs ORDER BY id ASC"
    ); 
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM qr_codes WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createEvent = async (req, res) => {
  try {
    const { Event_name, QRs, correlative } = req.body;
    const [result] = await pool.query(
      "INSERT INTO Eventos (Event_name, QRs, correlative) VALUES (?, ?, ?)",
      [Event_name, QRs, correlative]
    );
    res.json({
      id: result.insertId,
      Event_name,
      QRs,
      correlative,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createLog = async (req, res) => {
  const d = new Date();
  try {
    const { qr_code } = req.body;
    const [result] = await pool.query(
      "INSERT INTO logs(qr_code, Date) VALUES (?, ?)",
      [qr_code, d]
    );
    res.json({
      id: result.insertId,
      qr_code, 
      Date: d
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const result = await pool.query("UPDATE qr_codes SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const Validate = async (req, res) => {
  try {
    const { estado, validateat } = req.body;
    const result = await pool.query(
      "UPDATE QR SET estado =?, validateat =? WHERE id_qr =?",
      [estado, validateat, req.params.id_qr]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM qr_codes WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
=======
import { pool } from "../db.js";


export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM qr_codes ORDER BY id ASC"
    ); 
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getqr = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM QR WHERE id_qr =?", [
      req.params.id_qr,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "qr not found" });

    return res.json(result); // Return the result

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getqrs = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM QR ORDER BY id_qr ASC" 
    ); 
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getqrsevent = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM QR WHERE ID_evento = ? ORDER BY id_qr ASC",[
        req.params.ID_evento,
      ]
    ); 
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const getEvent = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Eventos WHERE id_event = ?", [
      req.params.id_event,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Event not found" });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const getEvents = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM Eventos ORDER BY id_event ASC"
    ); 
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getLogs = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM logs ORDER BY id ASC"
    ); 
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM qr_codes WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createEvent = async (req, res) => {
  try {
    const { Event_name, QRs, correlative } = req.body;
    const [result] = await pool.query(
      "INSERT INTO Eventos (Event_name, QRs, correlative) VALUES (?, ?, ?)",
      [Event_name, QRs, correlative]
    );
    res.json({
      id: result.insertId,
      Event_name,
      QRs,
      correlative,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createLog = async (req, res) => {
  const d = new Date();
  try {
    const { qr_code } = req.body;
    const [result] = await pool.query(
      "INSERT INTO logs(qr_code, Date) VALUES (?, ?)",
      [qr_code, d]
    );
    res.json({
      id: result.insertId,
      qr_code, 
      Date: d
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const result = await pool.query("UPDATE qr_codes SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const Validate = async (req, res) => {
  try {
    const { estado, validateat } = req.body;
    const result = await pool.query(
      "UPDATE QR SET estado =?, validateat =? WHERE id_qr =?",
      [estado, validateat, req.params.id_qr]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM qr_codes WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
>>>>>>> f7a04601cc38a944cb48c150d55977dc60d138f7
