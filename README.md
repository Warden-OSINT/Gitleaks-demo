# Gitleaks demo

Repositorio de **demostración** para el colector `gitleaks` de [Warden](https://github.com/Warden-OSINT/Warden).

> ⚠️ **Todos los secretos de este repositorio son falsos.** Se generaron con valores aleatorios
> y no dan acceso a ningún servicio. Su único propósito es que Warden muestre hallazgos del
> dominio "Secretos filtrados" durante una demostración.

## Qué debería encontrar Warden

| Archivo | Regla de gitleaks | Severidad en Warden |
|---|---|---|
| `keys/deploy_key.pem` | `private-key` | Crítica |
| `src/client.js` | `jwt` | Alta |
| `config/settings.py` | `generic-api-key` | Media |
| `.env` (borrado en un commit posterior) | `generic-api-key` | Media |

El `.env` se agregó y luego se eliminó a propósito: gitleaks revisa el **historial**, así que
un secreto borrado del código sigue expuesto mientras exista en un commit anterior.

## Cómo usarlo

En Warden, agrega el activo **Org. de código** `github.com/warden-osint` y lanza un escaneo con
la fuente Gitleaks habilitada.
