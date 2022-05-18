import { NextApiRequest, NextApiResponse } from "next";

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Capitalization Bonds
 *     summary: Conjunto de informações dos Títulos de Capitalização de uma instituição
 *     operationId: capitalizationBondsGetProducts
 *     description: Método para obter a lista de todos os títulos de Capitalização de uma instituição
 *     responses:
 *       '200':
 *         $ref: '#/components/responses/OKResponseCapitalizationBondsProductsList'
 *       '400':
 *         $ref: '#/components/responses/BadRequest'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '405':
 *         $ref: '#/components/responses/MethodNotAllowed'
 *       '429':
 *         $ref: '#/components/responses/TooManyRequests'
 *       '500':
 *        $ref: '#/components/responses/InternalServerError'
 */
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    result: res,
  });
};

export default handler;
