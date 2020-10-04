import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
//const express = require("express");
const app = express();
//Deklaracja aplikacji
//const cors = require("cors");
const pool = require("./DBHelper");

const TAGSer: string = "#ServerHelper - ";
const TAGApp: string = "#AppHelper - ";

export class ServerHelper {
  static initialize(): void {
    app.use(cors());
    app.use(express.json());
    app.use(bodyparser());
    console.log(`${TAGSer}initialized`);
  }

  static serverStarted(port: number): void {
    app.listen(port, () => {
      console.log(`${TAGSer}server started on ${port}`);
    });
  }
}

export class ApiHelper {
  static postApi(): void {
    app.post(
      "/friends",
      async (req: express.Request, res: express.Response) => {
        try {
          const kolega_imie: string = req.body["kolega_imie"];
          const kolega_zadluzenie: number = req.body["kolega_zadluzenie"];

          const newFriend = await pool.query(
            "INSERT INTO kolega(kolega_imie,kolega_zadluzenie) VALUES($1,$2) RETURNING *",
            [kolega_imie, kolega_zadluzenie]
          );
          console.log(`${TAGApp}${JSON.stringify(newFriend.rows[0])}`);
          res.json(newFriend.rows[0]);
        } catch (error) {
          console.error(error.message);
        }
      }
    );
  }
  static getApi(): void {
    app.get("/friends", async (req: express.Request, res: express.Response) => {
      try {
        const getFriend = await pool.query(
          "SELECT * FROM kolega order by kolega_id asc;"
        );
        console.log(`${TAGApp}All friends were showed by JSON!`);
        res.json(getFriend.rows);
      } catch (error) {
        console.error(error);
      }
    });
  }
  static getApiById(): void {
    app.get(
      "/friends/:kolega_id",
      async (req: express.Request, res: express.Response) => {
        try {
          const { kolega_id } = req.params;
          //chodzi o to zeby wyszukac po takim samym
          //id jak w url do api
          const getFriendById = await pool.query(
            "SELECT * FROM kolega WHERE kolega_id = $1",
            [kolega_id]
          );
          console.log(`${TAGApp}Wyswietlono kolege`);
          res.json(getFriendById.rows[0]);
        } catch (error) {
          console.error(error);
        }
      }
    );
  }
  static updateApi(): void {
    app.put(
      "/friends/:kolega_id",
      async (req: express.Request, res: express.Response) => {
        try {
          const { kolega_id } = req.params;
          const kolega_imie: string = req.body["kolega_imie"];
          const kolega_zadluzenie: number = req.body["kolega_zadluzenie"];

          const updateFriend = await pool.query(
            "UPDATE kolega SET kolega_imie = $1, kolega_zadluzenie = $2 WHERE kolega_id=$3",
            [kolega_imie, kolega_zadluzenie, kolega_id]
          );
          console.log(`${TAGApp}Zaaktualizowano kolege!`);
          res.json(updateFriend);
        } catch (error) {
          console.error(error);
        }
      }
    );
  }
  static deleteApi(): void {
    app.delete(
      "/friends/:kolega_id",
      async (req: express.Request, res: express.Response) => {
        try {
          const { kolega_id } = req.params;
          const deleteFriend = await pool.query(
            "DELETE FROM kolega WHERE kolega_id = $1",
            [kolega_id]
          );
          console.log(`${TAGApp}Usunieto kolege!`);
          res.json();
        } catch (error) {
          console.error(error);
        }
      }
    );
  }
  static deleteAllApi(): void {
    app.delete(
      "/friends",
      async (req: express.Request, res: express.Response) => {
        try {
          const deleteFriends = await pool.query("DELETE FROM kolega ");
          console.log(`${TAGApp}Usunieto wszystkich kolegow!`);
          res.json();
        } catch (error) {
          console.error(error);
        }
      }
    );
  }
}
