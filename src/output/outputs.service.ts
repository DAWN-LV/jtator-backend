import { Injectable } from "@nestjs/common"
import { FindAllOutputsDto } from "./dto/find-all-outputs.dto"

const output = [
  {
    "type": "paper",
    "info": {
      "type": "a4",
      "pages": 1,
      "name": "Paper"
    },
    "units": {
      "paper": 0.005,
    }
  },
  {
    "type": "paper",
    "info": {
      "type": "a3",
      "pages": 1,
      "name": "Paper"
    },
    "units": {
      "paper": 0.01,
    }
  },
  {
    "type": "notebook",
    "info": {
      "type": "a5",
      "pages": 80,
      "name": "Notebook"
    },
    "units": {
      "paper": 0.2,
      "glue": 0.05,
      "ink": 0.01
    }
  },
  {
    "type": "notebook",
    "info": {
      "type": "a4",
      "pages": 100,
      "name": "Notebook"
    },
    "units": {
      "paper": 0.4,
      "glue": 0.07,
      "ink": 0.02
    }
  },
  {
    "type": "sketchbook",
    "info": {
      "type": "a4",
      "pages": 50,
      "name": "Sketchbook"
    },
    "units": {
      "paper": 0.25,
      "glue": 0.03
    }
  },
  {
    "type": "diary",
    "info": {
      "type": "a5",
      "pages": 120,
      "name": "Diary"
    },
    "units": {
      "paper": 0.36,
      "glue": 0.08,
      "ink": 0.03
    }
  },
  {
    "type": "journal",
    "info": {
      "type": "a5",
      "pages": 150,
      "name": "Journal"
    },
    "units": {
      "paper": 0.3,
      "glue": 0.06,
      "ink": 0.025
    }
  },
  {
    "type": "planner",
    "info": {
      "type": "a6",
      "pages": 200,
      "name": "Planner"
    },
    "units": {
      "paper": 0.32,
      "glue": 0.09,
      "ink": 0.04
    }
  },
  {
    "type": "photo_album",
    "info": {
      "type": "a4",
      "pages": 30,
      "name": "Photo Album"
    },
    "units": {
      "paper": 0.15,
      "glue": 0.05
    }
  }
]

@Injectable()
export class OutputsService {
  findAll(dto: FindAllOutputsDto) {
    const resources = {
      paper: dto.paper || 0,
      glue: dto.glue || 0,
      ink: dto.ink || 0
    }

    const outputs = output.map(item => {
      const count = Math.min(
        ...Object.entries(item.units).map(([key, value]) => {
          return resources[key] / value
        })
      )

      return {
        type: item.type,
        info: item.info,
        count: Math.floor(count)
      }
    })

    return outputs.filter(item => item.count > 0)
  }
}
