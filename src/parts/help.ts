import { version } from '../utils/version'

/**
 * The help message
 */
export const help: string = `
chngr version ${version}

commands:

create:
    Creates a new commit file

bump:
    Unites all commit files into changelog with bumped version!


options:
    --interactive: Will launch interactive mode, takes priority over the other two!
`